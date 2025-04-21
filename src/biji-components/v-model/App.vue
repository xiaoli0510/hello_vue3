<script setup lang='ts'>
import { ref } from 'vue';
import A from './A.vue';
const s = ref('后裔')
const y = ref('蔡文姬')
const d = ref('李信')
const daye = ref('典韦')
const z = ref('小乔')
</script>
<template>
<A
v-model:s1="s"
v-model:y1="y"
v-model:d1="d"
v-model:daye1="daye"
v-model:z1="z"
@update:s1="s = $event"
@update:y1="y = $event"
@update:d1="d = $event"
@update:daye1="daye = $event"
@update:z1="z = $event"
/>
</template>
<style scoped lang='scss'>
</style>