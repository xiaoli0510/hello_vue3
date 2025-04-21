<script setup lang='ts'>
const a = defineModel('a')
defineModel('b')
</script>
<template>
    <div style="border:1px solid cyan">
        <div>{{ a }}</div>
        <button @click="$emit('update:a', '后裔')">改变一下啊</button>
        <div>{{ b }}</div>
        <button @click="$emit('update:b', '张飞')">改变一下啊</button>
    </div>
</template>