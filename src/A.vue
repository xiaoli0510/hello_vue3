<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import emitter from './eventBus';
emitter.emit('foo', '后裔')
const res = ref('')
emitter.on("foo", (val) => {
    console.log('这是a', val)
    res.value = val

})

const fight = () => {

}
</script>
<template>
    <div class="a">
        <div>{{ res }}</div>
        <button @click="fight">开始打了</button>
    </div>


</template>
<style scoped>
.a {
    border: 1px solid cyan;
}
</style>