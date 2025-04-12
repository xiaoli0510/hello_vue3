<script setup lang='ts'>
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route)
const {params} = toRefs(route)

</script>
<template>
    这是detail
    <div>id:{{ params.id }}</div>
    <div>title:{{ params.title }}</div>
    <div>content:{{ params.content }}</div>
    <div>a:{{ params.a }}</div>
</template>
<style scoped lang='scss'></style>