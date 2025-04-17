<script setup lang='ts'>
import { useCount } from './components/countHooks';


const {sum,add,minus} =useCount()

</script>
<template>

<div>sum:{{  sum}}</div>
<button @click="add">+</button>
<button @click="minus">-</button>
</template>
<style scoped lang='scss'></style>
