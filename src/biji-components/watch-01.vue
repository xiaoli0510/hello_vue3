<script setup lang='ts'>
//watch监听ref的简单数据类型
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