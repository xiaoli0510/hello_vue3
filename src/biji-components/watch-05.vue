<script setup lang='ts'>
import { ref, watch, watchEffect } from 'vue';

const temp = ref(10)
const height = ref(0)

const changeTemp = () => {
    temp.value += 10
}
const changeHeight = () => {
    height.value += 10
}

// watch([temp,height],(newVal,oldVal) => {
//     const [temVal,heightVal] = newVal
//     if(temVal >= 60 || heightVal >= 30){
//         console.log('是的吗')
//     }
// })

watchEffect(() => {
    console.log('111')
    if(temp.value >= 60 || height.value >=30){
        console.log('到了吗')
    }
})

</script>
<template>
    <div>temp:{{ temp }}</div>
    <div>height:{{ height }}</div>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  
</template>
<style scoped lang='scss'></style>