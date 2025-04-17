<script setup lang='ts'>
import { useLoveTalkStore } from '@/store/loveTalk'
const loveTalkStore = useLoveTalkStore()
import axios from 'axios';
import { nanoid } from 'nanoid';

loveTalkStore.$subscribe((mutation,state) => {
    //localStorage的数据，关掉浏览器也不会消失
    localStorage.setItem('talkList',JSON.stringify(state.loveList))
})

const getLove1 = async () =>{
    loveTalkStore.getLove()
    // const { data: { content: title } } = await axios.get('/api/rand.qinghua?format=json') // 使用代理路径
    // loveTalkStore.loveList.unshift({
    //     id: nanoid(),
    //     title:'11222'
    // })
}
</script>
<template>
    <div>
        <ul>
            <li v-for="item in loveTalkStore.loveList" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
    <button @click="getLove1">新增一个情话</button>
</template>
<style scoped lang='scss'></style>