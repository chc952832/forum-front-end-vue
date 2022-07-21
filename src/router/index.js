import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import store from './../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser //取出currentUser
  // 確定currentUser已取到, 且不是admin
  if (currentUser && !currentUser.isAdmin) {
    next('not-found')
    return
  }
  next()
}


const routes = [
  {
    path: '/',  // 根目錄
    name: 'root',  
    redirect: '/signin' // 當進入根目錄時導向餐廳頁面
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
  }, {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit.vue')
  },
  {
    path: '/admin',
    exact: true,   // 路由要完全匹配
    redirect: '/admin/restaurants' // 轉址
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'), 
    beforeEnter: authorizeIsAdmin
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

// 每次路由改變都會觸發這段程式碼
router.beforeEach(async(to, from, next) => {
  // 從 localStorage 取出 token
  const token = localStorage.getItem('token')
  let isAuthenticated = store.state.isAuthenticated
  const tokenInStore = store.state.token

  // 如果有 token, 而且 localStorage 和 store 中的 token 發生改變時才驗證
  if (token && token !== tokenInStore) {
    // 使用 dispatch 呼叫 Vuex 內的 actions, 取得驗證成功與否
     isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  // 不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['sign-in', 'sign-up']
  // 如果 token 無效且想要進入需要驗證的頁面, 則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }
  // 如果 token 有效且想要進入不需要驗證的頁面, 則轉址到餐廳首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }
  next()
})

export default router
