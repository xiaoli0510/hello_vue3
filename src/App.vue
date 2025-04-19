<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useCount } from './store/count';

const countStore = useCount()
const {sum,bigSum} = storeToRefs(countStore)
const {addSum,minus} = countStore

sum.value = Number(localStorage.getItem('sum')) || 0

countStore.$subscribe((mutation,state) => {
    console.log(mutation,state)
    localStorage.setItem('sum',sum.value.toString())
})
 
const addPatch = () => {
    // countStore.$patch({
    //     sum:22
    // })
    sum.value +=1
}

</script>
<template>
<div>sum:{{ sum }}</div>
<div>bigSum:{{ bigSum }}</div>
    <button @click="addSum">+</button>
    <button @click="minus">-</button>
    <button @click="addPatch">patch的方式修改</button>
</template>
<style scoped lang='scss'></style>