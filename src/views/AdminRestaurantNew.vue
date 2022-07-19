<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" :is-processing="isProcessing"/>
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helper'
export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm 
  },
  data() {
    return {
      // 避免使用者重複點擊
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit (formData) {
      try {
        this.isProcessing = true
        // 透過 API 將表單資料送到伺服器(透過 restaurants.create 方法來向伺服器建立餐廳)
        const { data } = await adminAPI.restaurants.create({formData})

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        // 成功的話則轉址到 `/admin/restaurants`
        this.$router.push({name: 'admin-restaurants'})
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }
      // 還沒串API前先將表單資料印出來確認
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }
    }
  }
}
</script>