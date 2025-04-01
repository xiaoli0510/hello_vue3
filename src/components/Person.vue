<script lang='ts' setup>
import { type PersonInter, type Persons } from '@/types';
import { reactive } from 'vue';
//接收props
// defineProps(['a','b'])
//接收并保存props
const props = withDefaults(defineProps<{
    list?: Persons,
    a: number,
    c?: number,
}>(), {
    list: () => [{
        id: 'vv',
        age: 12,
        name: '是后裔吗'
    }],
    c:33
})

</script>
<template>
    <div>a:{{ a }}</div>
    <div>c:{{ c }}</div>
    <div>{{ list }}</div>
    <div v-for="item in list" :key="item.id">{{ item.name }}--</div>
</template>
<style>
.a {
    border: 1px solid blue;
}
</style>