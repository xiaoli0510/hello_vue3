<script setup lang="ts">
import { reactive, ref } from 'vue';
import Person from './components/Person.vue';
import type { Persons } from './types';
const persons = reactive<Persons>([
    {
        id: 'ss',
        name: '后裔',
        age: 11,
        x: 12
    },
    {
        id: 'ss2',
        name: '后裔1',
        age: 11
    }
])
</script>
<template>
<Person :a="1"/>
</template>