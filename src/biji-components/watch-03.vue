<script setup lang='ts'>
import { reactive, watch } from 'vue';

const person = reactive({
    name: '后裔',
    age: 4,
})
const changeName = () => {
    person.name += '~'
}
const changeAge = () => {
    person.age += 1
}
const changePerson = () => {
    Object.assign(person, {
        name: 'lisi',
        age: 18
    })
}

watch(person,(newValue,oldValue) => {
    console.log(newValue,oldValue)
})

const obj = reactive({
    a:{
        b:{
            c:1111
        }
    }
})

const changeC = () => {
    obj.a.b.c = 888
}
/**
 * watch reactive定义的对象数据时，隐式开启深度监听(且不可取消深度监听)
 * 地址值没有变，即newValue oldValue都为新object
 */
watch(obj, (newValue,oldValue) => {
    console.log(newValue,oldValue)
})

</script>
<template>
    <div>name: {{ person.name }}</div>
    <div>age: {{ person.age }}</div>
    <button @click="changeName">改变name</button>
    <button @click="changeAge">改变age</button>
    <button @click="changePerson">改变person</button>
    <div>obj.a.b.c:{{ obj.a.b.c }}</div>
    <button @click="changeC">改变c</button>
</template>
<style scoped lang='scss'></style>