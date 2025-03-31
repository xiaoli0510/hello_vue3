<script setup lang='ts'>
import { ref, watch } from 'vue';

const sum = ref(0)
const changeSum = () => {
    sum.value += 1
}
const { stop } = watch(sum, (newVal, oldVal) => {
    console.log(newVal, oldVal)
    if (newVal >= 4 && newVal <= 7) stop()
})

</script>
<template>
    <div>sum: {{ sum }}</div>
    <button @click="changeSum">改变sum</button>
</template>
<style scoped lang='scss'></style>