<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>
<template>
    <div>
        <Header/>
       <router-link to="/home" active-class="a">首页</router-link>
       <router-link :to="{name:'xinwen'}" active-class="a">新闻</router-link>
       <router-link :to="{path:'/about'}" active-class="a">关于</router-link>
       <div>
        这是展示区
        <router-view/>
       </div>
    </div>
</template>
<style scoped>
.a {
    border:1px solid blue;
}
</style>