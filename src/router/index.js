import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

const Home = () => import("../views/home/Home")
const Profile = () => import("../views/profile/Profile")
const Cartshop = () => import("../views/cartshop/Cartshop")
const Category = () => import("../views/category/Category")

//创建路由对象
const router = new VueRouter({
    routes: [
        {
            path: '',
            redirect:'/home'
        },
        {
            path: '/home',
            component:Home
        },
        {
            path: '/profile',
            component:Profile
        }
        ,
        {
            path: '/category',
            component:Category
        },
        {
            path: '/cartshop',
            component:Cartshop
        }
    ]
})

//导出路由对象
export default router