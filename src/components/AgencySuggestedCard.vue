<script setup>
const props = defineProps(["suggestedLists"])
const emits = defineEmits(["addToShortList"])
</script>
<template>
    <div class=" shadow rounded-[8px]" v-for="item, i in suggestedLists" :key="i">
        <div class="min-h-[150px] max-h-[150px] w-full bg-gray-200">
            <img :src="item.banner_image" alt="" class="object-cover object-center min-h-[150px] max-h-[150px] rounded-t-[8px]">
        </div>
        <div class=" flex items-center gap-4 px-4 py-2">
            <div class="bg-gray-100 h-[40px] w-[40px] bg-2 flex items-center justify-center">
                <i v-if="!item.logo_image" class="pi pi-bars text-[20px] text-red-500" />
                <img v-else :src="item.logo_image" alt="" class="h-[40px] w-[40px] object-cover object-center ">
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
                <div class="my-2 " >
                    <div class="flex items-center gap-2 text-blue-500">
                        <div class="text-xs">Suggested by {{ item.suggested_by }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full border my-1"></div>
        <div class="p-4" >
            <div class="flex items-center gap-2 cursor-pointer">
                <i  class="pi pi-plus text-[18px] text-blue-500" />
                <div @click="emits('addToShortList', item)" class="text-sm font-semibold">Add to Shortlist</div>
            </div>
        </div>
    </div>
</template>