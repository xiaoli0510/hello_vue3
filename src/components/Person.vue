<script lang='ts' setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const sum = ref(1)
const addSum = () => {
    sum.value += 1
}
console.log('创建前')

onBeforeMount(() => {
    console.log('挂载前');
})

onMounted(() => {
    console.log('子--挂载后');
})
onBeforeUpdate(() => {
    console.log('更新前');
})

onUpdated(() => {
    console.log('更新后');
})

onBeforeUnmount( () => {
    console.log('销毁前');
})

onUnmounted(() => {
    console.log('销毁后');
})



</script>
<template>
    <div>sum:{{ sum }}</div>
    <button @click="addSum">增加sum</button>
  
</template>
<style>
.a {
    border: 1px solid blue;
}
</style>