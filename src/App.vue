<script setup lang='ts'>
import { ref } from 'vue';
import A from './A.vue';

const daye = defineModel('a',{
    default:'李信'
})
const zhonglu = defineModel('b',{
    default:'虞姬'
})

const change = () => {
    daye.value = '阿珂'
}

</script>
<template>
    <button @click="change('1')">改变</button>
    <A v-model:a="daye" v-model:b="zhonglu"></A>
</template>
<style scoped lang='scss'></style>