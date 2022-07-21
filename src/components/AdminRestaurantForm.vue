<template>
<Spinner v-if="isLoading"/>
  <form @submit.stop.prevent="handleSubmit" v-else>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>
        <option
        v-for="category in categories"
        :key="category.id" 
        :value="category.id">
        {{category.name}}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
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
      {{ isProcessing ? '處理中...' : '送出' }}
    </button>
  </form>
</template>

<script>
import Spinner from "./../components/Spinner.vue";
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helper'

export default {
  name: 'AdminRestaurantForm',
  components: {
    Spinner
  },
  props: {
    initialRestaurant: {
      type: Object,
      default : ()=> {
        return {
          id: -1,
          name: '',
          categoryId: '',
          tel: '',
          address: '',
          description: '',
          image: '',
          openingHours: ''
        } 
      }
    },
    isProcessing: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      restaurant: {
        ...this.initialRestaurant
      } 
      ,
      categories: [],
      isLoading: true
    }
  },
  created() {
    this.fetchCategories()
  },
  watch: {
    // watch可對資料做監聽, 針對監聽的資料可以放入兩個參數, 新值與舊值
    initialRestaurant(newVal) {
      this.restaurant= {
        ...this.restaurant, // 先把原有的值作為預設值放入, 避免有些值在newVal中沒有
        ...newVal  // API拿回資料後(資料更新後), 放入initialRestaurant新值
      }
    }
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get() 
        this.categories = data.categories
        // 表單綁上v-show, 搭配isLoading, 讓資料都取得再顯示表單給使用者看, 避免資料還沒回傳, 無法選擇類別的情況
        this.isLoading = false 
      } catch(error) {
        // 發生錯誤時也要顯示出表單, 並跳出錯誤訊息
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    handleFileChange(e) {
      const { files } = e.target
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.restaurant.image = ''
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    handleSubmit(e) {
      // 避免使用者漏填表單資料
      if (!this.restaurant.name) {
        Toast.fire({
          icon: 'warning',
          title: '請填寫餐廳名稱'
        })
        return
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: 'warning',
          title: '請選擇餐廳類別'
        })
        return
      }
      const form = e.target // <form></form>
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  }
}
</script>