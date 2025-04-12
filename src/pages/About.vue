<script setup lang='ts'>
import { onMounted, onUnmounted } from 'vue';


onMounted(() => {
    console.log('about mounted');
});

onUnmounted(() => {
    console.log('about unmounted');
})
</script>
<template>
    about
</template>
<style scoped lang='scss'></style>