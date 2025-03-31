<script setup lang='ts'>
//watch监听ref的对象数据
import { ref, watch } from 'vue';

const person = ref({
    name: '后裔',
    age: 4,
})
const changeName = () => {
    person.value.name += '~'
}
const changeAge = () => {
    person.value.age += 1
}
const changePerson = () => {
    person.value = {
        name: '张飞',
        age: 2
    }
}

watch(person, (newValue, oldValue) => {
    //若整个改变person,newValue和 oldValue一样，都是新值
    //若改变person的属性，newValue和 oldValue不一样
    console.log(newValue, oldValue)
}, {
    deep: true
})

</script>
<template>
    <div>name: {{ person.name }}</div>
    <div>age: {{ person.age }}</div>
    <button @click="changeName">改变name</button>
    <button @click="changeAge">改变age</button>
    <button @click="changePerson">改变person</button>
</template>
<style scoped lang='scss'></style>