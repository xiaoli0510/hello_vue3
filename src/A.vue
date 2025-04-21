<script setup lang='ts'>
defineProps(['s1', 'y1', 'z1', 'daye1', 'd1'])
const emit = defineEmits(['update:s1', 'update:y1', 'update:d1', 'update:daye1', 'update:z1'])
</script>
<template>
    <input :value="s1" @input="emit('update:s1', (<HTMLInputElement>$event.target).value)" />
    <br />
    <input :value="y1" @input="emit('update:y1', (<HTMLInputElement>$event.target).value)" />
    <br />
    <input :value="z1" @input="emit('update:z1', (<HTMLInputElement>$event.target).value)" />
    <br />
    <input :value="daye1" @input="emit('update:daye1', (<HTMLInputElement>$event.target).value)" />
    <br />
    <input :value="d1" @input="emit('update:d1', (<HTMLInputElement>$event.target).value)" />
    <br />
</template>
<style scoped lang='scss'></style>