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
    isAuthenticated: false
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
    }
  },
  // 透過API請求資料
  actions: {
    async fetchCurrentUser({commit}) {
      try{
        const { data } = await usersAPI.getCurrentUser()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { id, name, email, image, isAdmin} = data
        commit('setCurrentUser', { id, name, email, image, isAdmin})
      } catch(error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
