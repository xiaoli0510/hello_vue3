import { ref } from "vue"

export const useCount = () => {

    const sum = ref(1)
    const add = () => {
        sum.value += 1
    }
    const minus = () => {
        sum.value -=1
    }

    return {
        sum,
        add,
        minus
    }
}