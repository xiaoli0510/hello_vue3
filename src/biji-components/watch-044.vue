<script setup lang='ts'>
import { reactive, watch } from 'vue';

const person = reactive({
    name: '后裔',
    age: 11,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
})
const changeName = () => {
    person.name += '~'
}
const changeAge = () => {
    person.age += 1
}
const changeC1 = () => {
    person.car.c1 += 'c1~'

}
const changeC2 = () => {
    person.car.c2 += 'c2~'
}
const changeCar = () => {
    person.car = {
        c1: '后裔1',
        c2: '张飞1'
    }
}
watch([() => person.name, () => person.car.c1], (newValue, oldValue) => {
    console.log(newValue, oldValue)
})
</script>
<template>
    <div>name:{{ person.name }}</div>
    <div>age:{{ person.age }}</div>
    <div>c1:{{ person.car.c1 }}</div>
    <div>c2:{{ person.car.c2 }}</div>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
    <button @click="changeC1">修改c1</button>
    <button @click="changeC2">修改c1</button>
    <button @click="changeCar">修改car</button>
</template>
<style scoped lang='scss'></style>