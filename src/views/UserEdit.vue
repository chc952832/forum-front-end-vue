<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
        v-if="user.image"
        :src="user.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isProcessing"
      >
        {{isProcessing ? '處理中...' : 'Submit'}}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helper'


export default {
  name: 'UserEdit',
  data () {
    return {
      user: {
        id: -1,
        name: '',
        image: '',
        email:''
      },
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  // 透過 watch 監控 currentUser 有無變化
  watch: {
    currentUser() {
      this.setUser()
    }
  },
  created() { 
    const {id} = this.$route.params
    // 若使用者嘗試直接從路由進入其他使用者的 edit 頁
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({name: 'not-found'})
      return
    }
    this.setUser()
  },
  // 路由改變時重新抓取資料
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUser()
    next()
  },
  methods: {
    // 將 currentUser 的資料帶入該組件的 Vue 資料內
    setUser() {
      this.user = {
        id: this.currentUser.id,
        name: this.currentUser.name,
        image:this.currentUser.image, 
        email: this.currentUser.email
      }
    },
    handleFileChange(e) {
      const {files} = e.target
      if (files.length === 0) {
        this.user.image = ''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.image = imageURL
      }
    },
    async handleSubmit(e) {
        // 如果未填或填入空白-> 提示
        if (!this.user.name.trim()) {
        Toast.fire({
          icon: 'warning',
          title: '請填寫姓名'
        })
        return
        }
        const form = e.target
        const formData = new FormData(form)
      try{
        this.isProcessing = true
        // 呼叫 API 更新使用者資料
        const { data } = await usersAPI.update({userId: this.user.id, formData})
        if (data.status !== 'success') {
            throw new Error(data.message)
        }
        // 更新完成後轉址到使用者詳細頁
        this.$router.push({name: 'user', params: {id : this.user.id}})
        // for (let [name, value] of formData.entries()) {
        //     console.log(name + ': ' + value)
        // }
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
            icon: 'error',
            title: '無法更新使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>