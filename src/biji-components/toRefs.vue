<script lang="ts" setup>
import { reactive, ref, toRef, toRefs } from 'vue';
import Son from './Son.vue';
let car = reactive({
    name: '奔驰',
    price: 100
})
let { name, price } = toRefs(car)

let xx = toRef(car,'name')
console.log(xx);
console.log(xx.value);
const changePrice = () => {
    price.value += 10
    console.log(price, car.price);
}
const changeBrand = () => {
    // name.value += '~';
    // console.log(name, car.name);
    xx.value += '~'


}
const changeCar = () => {

}



let sum = ref(0)
const changeSum = () => {
    sum.value += 1
}

const a = ref(111)
</script>
<template>
    <div>一辆{{ car.name }}车，价值{{ car.price }}</div>
    <div>一辆{{ name }}车，价值{{ price }}</div>
    <button @click="changePrice">改变价格</button>
    <button @click="changeBrand">改变品牌</button>
    <button @click="changeCar">改变品牌</button>
    <hr />
    <div>sum:{{ sum }}</div>
    <button @click="changeSum">修改sum</button>
    <Son :a="a"/>
</template>
<style scoped>
.person {
    background: #ccc;
}
</style>