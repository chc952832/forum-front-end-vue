import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  // 根目錄
    name: 'root',  
    redirect: 'restaurants' // 當進入根目錄時導向餐廳頁面
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: () => import('../views/RestaurantsTop.vue')  
  },
  // 注意寫的位置，路由由上往下匹配，如果寫在上面，會以為/top或/feed是id的一部分，導致頁面顯示出錯
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '*', //由於 Vue Router 路由會由上往下進行匹配，所以當所有的路由都無法匹配，最後就會匹配到 path: '*'，星號(*) 是萬用字元，這裡代表「所有的網址」，也就是說不管使用者輸入什麼，只要找不到對應網頁，最後就會返回 NotFound 這個頁面。
    name:'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass : 'active',
  routes
})

export default router
