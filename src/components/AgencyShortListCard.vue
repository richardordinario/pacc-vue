<script setup>
import { ref, onMounted, unref } from "vue"
const props = defineProps(["shortLists"])
const emits = defineEmits(["removeFromShortList"])

</script>
<template>
    <div class="p-4 shadow rounded-[8px]" v-for="item, i in shortLists" :key="i">
        <div class=" flex items-center gap-4">
            <div  class="bg-gray-200 h-[40px] w-[40px] bg-2 flex items-center justify-center">
                <i v-if="!item.logo_image" class="pi pi-bars text-[20px] text-red-500" />
                <img v-else :src="item.logo_image" alt="">
            </div>
            <div class="flex-1">
                <div class=" flex items-center gap-2 justify-between">
                    <div class="">
                        {{ item.name }}
                    </div>
                    <a target="_blank" :href="item.external_link" class="mt-2 cursor-pointer">
                        <i class="pi pi-eye text-[18px] text-purple-500 font-semibold"/>
                    </a>
                </div>
                <div class="flex items-center">
                    <div class="" v-for="location, j in item.locations" :key="j">
                        <div class="text-xs mx-1 text-gray-500" >{{ location }} <span v-if="j!=item.locations-1">,</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-2 " >
            <div class="flex items-center gap-2 text-blue-500 font-semibold">
                <i class="pi pi-arrow-up-right text-[18px]" />
                <div class="text-sm">Added by {{ item.added_by }}</div>
            </div>
        </div>
        <div class="w-full border my-2"></div>
        <div class="mt-4 " >
            <div @click="emits('removeFromShortList', item)" class="flex items-center gap-2 cursor-pointer">
                <i  class="pi pi-trash text-[18px] text-red-500" />
                <div class="text-sm  font-semibold">Remove from Shortlist</div>
            </div>
        </div>
    </div>
</template>