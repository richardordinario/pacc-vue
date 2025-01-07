<script setup>
const props = defineProps(["title"])
</script>
<template>
    <div class="my-10 px-4">
        <div class="mb-7 px-4 font-semibold">{{ title }}</div>
        <div class="grid grid-cols-3 my-4 gap-4">
            <slot name="content"></slot>
        </div>
    </div>
</template>