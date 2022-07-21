<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <!-- .stop 表示 event.stopPropagation(), 阻止事件冒泡 -->
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helper'
export default {
  data () {
    return {
      email: '',
      password:'',
      isProcessing: false // 判斷使用者是否正在送出登入資料
    }
  },
  methods: {
    // async/await改寫
    async handleSubmit() {
      try {
        // 如果 email 或 password 為空，則使用 Toast 提示，然後 return 不繼續往後執行
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        } 
        // 已送出資料, 等待伺服器回應中
        this.isProcessing= true  
        // 向後端驗證使用者登入資訊是否合法: 傳入email, password
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })
        // 取得 API 請求後的資料
        const {data} = response
        // 判斷API請求是否成功, 如未成功, 拋出錯誤訊息(伺服器回傳的錯誤訊息), 拋錯後, 下面的程式碼就不會被執行
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)

        // 透過setCurrentUser 把使用者資料傳到 Vuex 的 state 中
          // 傳入 data.user 到 setCurrentUser 方法中
        this.$store.commit('setCurrentUser', data.user)
        // 成功登入後轉址到餐廳首頁, 因為成功登入就會轉址，所以不用還原 isProcessing 的狀態(轉址後使用者就無法再次點擊submit按鈕)
        this.$router.push('/restaurants')
      // 如果噴錯就會執行catch的程式碼
      } catch(error) { 
        // 因為登入失敗，所以要把按鈕狀態還原
        this.isProcessing= false
        // 將密碼欄位清空
        this.password = ''
        // 顯示錯誤提示
        Toast.fire({
          icon: 'warning',  // Toast的類型
          title: '請確認您輸入了正確的帳號密碼'  // 要顯示的內容
        })
        console.log('error', error)   
      }
    }
  }
}
</script>



