<script setup>
import AgencyShortListCard from '@/components/AgencyShortListCard.vue';
import AgencySuggestedCard from '@/components/AgencySuggestedCard.vue';
import AgencyList from '@/components/AgencyList.vue';
import { useAgencyStore } from '@/stores/agency';
import { storeToRefs } from 'pinia';
import { ref, onMounted, unref } from "vue"

const agencyStore = useAgencyStore()
const { agencies } = storeToRefs(agencyStore)
const shortLists = ref([])
const suggestedLists = ref([])

onMounted(async() => await fetch())

const fetch = async () => {
  shortLists.value = await agencyStore.getShortLists()
  suggestedLists.value = await agencyStore.getSuggestedLists()
}

const addToShortList = async (item) => {
  await agencyStore.addToShortList(item)
  await fetch()
}

const removeFromShortList = async(item) => {
  await agencyStore.removeFromShortList(item)
  await fetch()
}

</script>
<template>
    <main class="min-h-screen w-full bg-gray-100">
        <div class="container max-w-6xl min-h-screen mx-auto">
            <header class="h-20 flex items-center px-4 border-b justify-between">
                <div class="h-[50px] w-[50px] bg-gray-200 rounded-full"></div>
                <div class="">Client</div>
            </header>
            <AgencyList title="AGENCY SHORTLIST">
              <template #content>
                <AgencyShortListCard 
                  :shortLists="shortLists"
                  @removeFromShortList="removeFromShortList"
                ></AgencyShortListCard>
              </template>
            </AgencyList>
            <AgencyList :title="`SUGGESTED AGENCIES (${suggestedLists.length})`">
              <template #content>
                <AgencySuggestedCard   
                  :suggestedLists="suggestedLists"
                  @addToShortList="addToShortList"
                ></AgencySuggestedCard>
              </template>
            </AgencyList>
        </div>
    </main>
</template>