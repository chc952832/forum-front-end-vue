<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      to="/"
    >
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent" 
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
             to="/admin" 
             class="text-white mr-3"
             v-if="currentUser.isAdmin"
        >
         管理員後台
        </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated"> 
          <router-link
              :to="{name: 'user', params: {id: currentUser.id} }" 
              class="text-white mr-3"
            > 
            {{currentUser.name || '使用者'}} 您好
          </router-link>
          <button
            type="button" 
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
            >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState} from 'vuex'

/* eslint-disable */     
// 假資料：模擬API回傳的內容
// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: '管理者',
//     email: 'root@example.com',
//     image: 'https://i.pravatar.cc/300',
//     isAdmin: true
//   },
//   isAuthenticated: true
// }
export default {
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  }
  // Vue 會在沒有資料時使用此預設值，一旦接受到外部資料，這組 currentUser 就會被覆寫。
  // data () {
  //   return  {
  //     currentUser: {
  //       id: -1,
  //       name: '',
  //       email: '',
  //       image: '',
  //       isAdmin: false
  //     },
  //     isAuthenticated: false
  //   }
  // },
  // methods: {
  //   // 向後端API拉取資料
  //   fetchUser() {
  //     this.currentUser= {
  //       // 在key值相同時, dummyUser.currentUser的資料會覆蓋currentUser的資料
  //       ...this.currentUser, // 預設資料
  //       ...dummyUser.currentUser // 透過API拉進來的資料
  //     }
  //     this.isAuthenticated = dummyUser.isAuthenticated
  //   }
  // },
  // created () {
  //   this.fetchUser() // 呼叫資料
  // }
}
</script>