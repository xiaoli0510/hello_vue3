<script setup lang='ts'>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
onMounted(() => {
    setTimeout(() => {
        router.push('/news')
    },3000)
    console.log('Home page mounted');
});
</script>
<template>
    首页
</template>
<style scoped lang='scss'></style>