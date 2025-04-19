<script setup lang='ts'>
import { ref, toRefs } from 'vue';
import { useCountStore } from '../store/count';
import { storeToRefs } from 'pinia';
const countStore = useCountStore()
//toRefs会将countStore上面的所有属性方法都变为refs,storeToRefs只关注数据state和getters
// console.log('111111111',toRefs(countStore))
const {sum,school,bigSum,upperSchool,countFn} = storeToRefs(countStore)

countStore.$subscribe((mutation,state) => {
    console.log(mutation,state);

})
const add = () => {
    //修改state数据的三种方式
    //方法1：直接修改
    // countStore.sum += 1
    //方法2：$patch
    countStore.$patch({
        sum:countStore.sum += 1,
        // school:'22222222'
    })
}
const minus = () => {
    //方法3：使用pinia的actions
  countStore.minus()
}
</script>
<template>
    <select v-model.number="countStore.n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <div>sum:{{ sum }} 放大100倍后的sum:{{ bigSum }}</div>
     <div>school:{{ school }}，大写的school:{{ upperSchool }}</div>
     <div>countFn:{{ countFn(12) }}</div>
    <button @click="add">+</button>
    <button @click="minus">-</button>

</template>
<style scoped lang='scss'></style>