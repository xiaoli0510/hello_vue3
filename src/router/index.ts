import { createRouter, createWebHistory, useRoute } from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children:[
        {
            name:'xiangqing',
            path:'detail/:id/:title/:content?',
            component:Detail,
            props:true//1.将params当作props传递
            // props(route){//2.函数是写法，自己决定将什么当作props
            //   return route.query
            // },
            // props:{//3.将对象当作props
            //   id:'xx',
            //   title:'yy',
            //   content:'zzz'
            // }
        }
      ]
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
    {
      path: '/:a/:b',
      // redirect:'/home'
      // redirect:{
      //   name:'guanyu',
      //   query:{
      //     a:22
      //   }
      // }
      redirect:to=>{
        console.log(to)
        return {path:'/news',query:{a:to.params.a,b:to.params.b}}
      }
    }
  ],
});

export default router;
