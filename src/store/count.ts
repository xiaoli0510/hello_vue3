import {defineStore } from 'pinia'

export const useCountStore = defineStore('count',{
    state(){
        return {
            sum:6,
            n:1,
            school:'abc'
        }
    },
    actions:{
        add(){
            this.sum += this.n
        },
        minus(){
            this.sum -= this.n
        },
        changeA(val:number){
            this.n = val
        }
    },
    getters:{
        //getters的三种写法
        //1 箭头函数，不使用this时
        bigSum:state => state.sum * 100,
        upperSchool(state):string{
            //2 非箭头函数，需使用到this
            return state.school.toUpperCase()
            // return this.school.toUpperCase()
        },
        //3 需要传参时，返回一个带参数的函数
        countFn():Function{
            return (val:number) => this.sum + val
        }
    }

})