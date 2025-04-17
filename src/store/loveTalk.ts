import axios from 'axios';
import { nanoid } from 'nanoid';
import {defineStore} from 'pinia';

export const useLoveTalkStore = defineStore('loveTalk', {
    state(){
        return {
            // 检查 localStorage 是否为空，避免 JSON.parse 报错
            loveList:JSON.parse(localStorage.getItem('talkList')||'[]')||[]
        }
    },
    actions:{
        async getLove(){
            this.loveList.unshift({
                id: nanoid(),
                title:"后裔"
            })
        }
    }
})