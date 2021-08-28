import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home.vue")
const Category = () => import("views/category/Category.vue")
const Cart = () => import("views/cart/Cart.vue")
const Profile = () => import("views/profile/Profile.vue")
const Details = () => import("views/details/Details.vue")

//1.安装插件
Vue.use(VueRouter)

//2.创建routes
const routes = [
  { 
    path: '', 
    redirect: '/home', 
  },
  {
    path: '/home', 
    component: Home,
  },
  {
    path: '/details/:iid', 
    component: Details,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/cart',
    component: Cart,
  },
]

const router = new VueRouter({
  routes,
  mode:'hash',
})

export default router