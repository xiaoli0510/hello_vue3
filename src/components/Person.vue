<script lang='ts' setup>
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum.ts'
 const {dogList,addDog} = useDog()

const { addSum, sum } = useSum()
</script>
<template>
    <div>sum:{{ sum }}</div>
    <button @click="addSum">增加sum</button>
    <br />

    <img v-for="(dog, index) in dogList" :key="index" :src="dog" />
    <button @click="addDog">加一条狗</button>
</template>
<style>
img {
    height: 40px;
}
</style>