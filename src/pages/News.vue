<script setup lang='ts'>
import { reactive } from 'vue';

const newsList = reactive([{
    id: 1,
    title: '新闻1',
    content: 'content1'
},{
    id: 2,
    title: '新闻2',
    content: 'content2'
},{
    id: 3,
    title: '新闻3',
    content: 'content3'
}])
</script>
<template>
    <div>这是新闻列表</div>
    <ul>
        <li  v-for="item in newsList" :key="item.id">
            <!-- <router-link :to="`/news/detail?id=${item.id}&title=${item.title}&content=${item.content}`">{{item.title}}</router-link> -->
             <!-- <router-link :to="{
                name:'xiagnqing',
                query:{
                    id:item.id,
                    title:item.title,
                    content:item.content
                }
             }">{{ item.title }}</router-link> -->
             <!-- <router-link :to="`/news/detail/${item.id}/${item.title}`">{{ item.title }}</router-link> -->
              <router-link :to="{
                name:'xiagnqing',
                params:{
                    id:item.id,
                    title:item.title,
                }
              }">{{ item.title }}</router-link>
        </li>
    </ul>
    <router-view></router-view>
    news
</template>
<style scoped>
 li::marker {
    color:rgb(179, 228, 179)
 }
</style>