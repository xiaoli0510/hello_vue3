import { defineStore } from "pinia";

interface IListItem {
    id:number,
    name:string
}
type COUNSTATE = {
  count: number,
  list:IListItem[]
  a:string
};

//第一个参数相当于id,用来连接store和devtools
//对象式写法 
export const useCountStore = defineStore("count", {
  state: () => {
    return {
      count: 1,
      list:[{
        id:1,
        name:'张三'
      },{
        id:2,
        name:'后裔'
      }],
      secret:'' ,
      a:'',
      b:'',
      c:'',
    };
  },
  getters: {
    // 第一个参数为state,默认是缓存的，即获取多次取的是缓存里面的内容
    doubleCount: (state: COUNSTATE) => {
      return state.count * 2;
    },
    doubleCountPlusOne: (state: COUNSTATE) => {
      return state.count * 2 + 1;
    },
    //向getter传递参数，getter是幕后计算，除了state，不能传入其他参数，但是可以返回一个传参数的函数
    getUserById:(state)=> {
        console.log('返回函数的情况下，需要调用，这种情况没有缓存')
        return (userId:number) => state.list.find(user=> user.id === userId)
    }
  },
  actions: {
    add() {
      this.count++;
    },
    minus() {
      this.count--;
    },
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
