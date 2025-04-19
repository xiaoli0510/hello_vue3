import {defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useUser = defineStore('User',() => {
    const user = reactive({
        id:1,
        name:'cc',
    })

    const gerUserInfo = computed(() => {
        return Object.assign({},user,{age:12})
    })

    const changeUser = () => {
        user.id = 333
    }
    return {
        user,
        gerUserInfo,
        changeUser
    }

})