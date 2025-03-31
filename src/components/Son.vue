<script setup lang='ts'>
import { toRef, toRefs } from 'vue';

const props = defineProps(['a'])

const aValue = toRef(props,'a')
const changeA = () => {
    // props.a = 123
    aValue.value = 123
}
</script>
<template>
<div>{{ a }}</div>
<div>{{ aValue }}</div>
<button @click="changeA">点击+</button>
</template>
<style scoped lang='scss'>
</style>