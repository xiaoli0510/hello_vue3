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
/*
监听object里面的属性,且属性是简单数据类型时，需要写成getter函数(一个函数，返回一个值)，此时newValue与oldValue不一样
*/
watch(() => {
    return person.name
}, (newValue, oldValue) => {
    console.log(newValue, oldValue)
})
/*
监听object里面的属性,且属性是复杂数据类型时，可直接写props.car(此时不能监听整体替换的情况)或者函数式(建议写成getter函数，需要添加deep:true)
写成getter函数时，监听的时person.car的地址值，细节不会监听到，所以需要deep:true
*/
watch(() => person.car, (newValue, oldValue) => {
    console.log('car变化了吗', newValue, oldValue)
},{
    deep:true
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