<template>
  <div class="container py-5">
    <AdminRestaurantForm @after-submit="handleAfterSubmit" :initial-restaurant="restaurant" :is-processing="isProcessing"/>
  </div>
</template>

<script>

import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helper'
export default {
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false
    }
  },
  created() {
    const {id} = this.$route.params
    this.fetchRestaurant(id)
  },
  // 監聽路由變化: 路由改變時重新抓取資料
  beforeRouteUpdate(to, next) {
    const { id } = to.params
    // 重新拉取資料
    this.fetchRestaurant(id)
    // 完成後繼續往下執行
    next()
  },
  methods: {
    async handleAfterSubmit (formData) {
      try{
        this.isProcessing = true
        // 透過 API 將表單資料送到伺服器
        const { data } = await adminAPI.restaurants.update({restaurantId: this.restaurant.id, formData})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'admin-restaurants' })
        // 未串接API前，印出formData確認資料
        // for (let [name, value] of formData.entries()) {
        //   console.log(name + ': ' + value)
        // }
      } catch(error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    },
    async fetchRestaurant(restaurantId) {
      try{
        const { data } = await adminAPI.restaurants.getDetail({restaurantId})
        const { id, name, tel, address, description, image, opening_hours:openingHours, CategoryId: categoryId} = data.restaurant
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          description,
          image,
          openingHours,
          categoryId
        }
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>