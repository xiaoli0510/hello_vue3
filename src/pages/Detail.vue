<script setup lang='ts'>
import { toRef, toRefs } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route)
defineProps(['id', 'title', 'content'])  

</script>
<template>
    这是detail
    <div>id:{{id}}</div>
    <div>title:{{ title }}</div>
    <div>content:{{ content }}</div>
</template>
<style scoped lang='scss'></style>