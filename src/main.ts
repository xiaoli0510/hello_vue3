//引用createApp 创建应用
import { createApp, ref } from "vue";
import {createPinia } from "pinia"; //引入pinia状态管理




//引入App根组件
import App from "./App.vue";
import router from "./router";

 const pinia = createPinia()

// //1 推荐：返回对象的方式
const SecretPiniaPlugin = () => {
    return {
        secret:'333333333'
    }
}
//插件：通过注册中间件的方式，来给pinia添加插件，添加全局的store属性和方法
pinia.use(SecretPiniaPlugin)

// //2 直接给store添加属性的方式。使用此方式时，需要将其添加到_customProperties,才能使devtools跟踪到a
const sharedRef = ref('shared')
pinia.use(({store}) => {
    store.a='222222222'
    store.b = ref(33)//store.b = 33 每个store都被reactive包装过，会自动解包里面的ref() computed()
    store.c = sharedRef
    if(import.meta.env.MODE === 'development'){
        store._customProperties.add('a')
        store._customProperties.add('b')
        store._customProperties.add('c')

    }
})


// const app = createApp(App)
// app.use(router)
// app.use(createPinia())

// app.mount("#app");

createApp(App).use(pinia).use(router).mount('#app')
