import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  getters: {
  },
  // 用來修改 state 的方法
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state,  // 先複製一份
        ...currentUser // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true 
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''  // 登出時一併將 state 內的 token 移除
      localStorage.removeItem('token')
    }
  },
  // 透過API請求資料
  actions: {
    // 進行token驗證
    async fetchCurrentUser({commit}) {
      try{
        const { data } = await usersAPI.getCurrentUser()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { id, name, email, image, isAdmin} = data
        commit('setCurrentUser', { id, name, email, image, isAdmin})
        return true  // token有效, 驗證成功
      } catch(error) {
        console.error(error.message)
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication') 
        return false  // token無效, 驗證失敗
      }
    }
  },
  modules: {
  }
})
