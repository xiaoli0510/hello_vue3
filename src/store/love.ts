import { defineStore } from "pinia";

//第一个参数相当于id,用来连接store和devtools
//对象式写法 
export const useLoveStore = defineStore("love", {
  state: () => {
    return {
      list:[
        {
          id:1,
          title:'你是'
        }
      ]
    };
  },
  actions: {
  },
});

//setup 函数式写法
// export const useCountStore = defineStore("count", ()=>{
//     const count = ref(11)

//     const doubleCount = computed(() => {
//         return count.value * 2
//     })

//     const doubleCountPlusOne= computed(() => {
//         return count.value * 2 +1
//     })

//     const add = () => {
//         count.value ++
//     }

//     const minus = () => {
//         count.value --
//     }

//     return {
//         count,
//         doubleCount,
//         doubleCountPlusOne,
//         add,
//         minus
//     }
// })
