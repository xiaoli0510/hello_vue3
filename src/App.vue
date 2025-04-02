<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Person from './components/Person.vue';
const show = ref(true)
const changeShow = () => {
    show.value = !show.value
}

onMounted(() => {
    console.log('父--挂载后');
})
</script>
<template>
<Person v-if="show"/>
<button @click="changeShow">改变person</button>
</template>