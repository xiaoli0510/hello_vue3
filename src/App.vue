<script setup lang="ts">
import { ref } from 'vue';
import Person from './components/Person.vue';
const ren = ref()
const getTitle = () => {
    console.log(ren.value);
    console.log(ren.value.a);
}
</script>
<template>
    <div ref="title2" class="a">则会使啥</div>
    <button @click="getTitle">点击获取title</button>
<Person ref="ren"/>
</template>
<style>
.a {
    border:1px solid red;
}
</style>