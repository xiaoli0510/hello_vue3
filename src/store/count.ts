import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCount = defineStore('count1',() => {
  
  const sum = ref(1)

  const addSum = () => {
    sum.value += 1
  }

  const minus = () => {
    sum.value -= 1
  }

  const bigSum = computed(() => {
    return sum.value * 100
  })

  return {
    sum,
    addSum,
    minus,
    bigSum
  }
})
