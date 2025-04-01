<script lang='ts' setup>
import { ref } from 'vue'



const title2 = ref()
const getTitle = () => {
    console.log(title2.value)
}

const a = ref(111)
const b = ref(1)

defineExpose({a})

</script>
<template>
   <div ref="title2"  class="a">后裔</div>
   <button @click="getTitle">点击获取title</button>

</template>
<style>
.a {
    border:1px solid blue;
}
</style>