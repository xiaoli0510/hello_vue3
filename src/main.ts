//引用createApp 创建应用
import { createApp } from "vue";
import {createPinia } from 'pinia'
const pinia = createPinia()


//引入App根组件
import App from "./App.vue";
import router from "./router";

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount("#app");
