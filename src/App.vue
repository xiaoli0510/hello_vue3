<script setup lang='ts'>
import mitt from 'mitt'
import A from './A.vue';
import { onMounted, ref } from 'vue';
import emitter from '@/eventBus.ts'

const res = ref('')
emitter.on('foo',(val:string) => {
    res.value = val
})
const fight1 = () => {
    emitter.emit('foo1','蔡文姬')
}
</script>
<template>
    <div>这是A给:{{ res }}</div>
    <button @click="fight1">我开团</button>
    <A/>

</template>
<style scoped lang='scss'>
</style>