<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4" v-show="!isLoading">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
        alt="Card image cap"
        width="286px"
        height="180px"
        @load="changeLoading"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
            {{restaurant.name}}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{restaurant.Category? restaurant.Category.name : '未分類'}}</span>
        <p class="card-text text-truncate">
          {{restaurant.description}}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          :disabled="isProcessing"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
        >
          移除最愛
        </button>
        <button
          v-else
          :disabled="isProcessing"
          @click.stop.prevent="addFavorite(restaurant.id)"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          :disabled="isProcessing"
          @click.stop.prevent="deleteLike(restaurant.id)"
          type="button"
          class="btn btn-danger like mr-2"
        >
          Unlike
        </button>
        <button
          v-else
          :disabled="isProcessing"
          @click.stop.prevent="addLike(restaurant.id)"
          type="button"
          class="btn btn-primary like mr-2"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {emptyImageFilter} from './../utils/mixins'
// STEP 1: 載入 API 方法和 Toast 提示工具
import usersAPI from './../apis/users'
import { Toast } from './../utils/helper'

export default {
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  // 因為props傳入的資料無法修改, 因此新增restaurant資料, 並放入initialRestaurant資料內容
  data() {
    return {
      restaurant : this.initialRestaurant,
      isLoading: true,
      isProcessing: false
    }
  },
  methods: {
    changeLoading() {
      this.isLoading = false
    },
    // STEP 2: 將 addFavorite 改成 async/await 語法
    async addFavorite(restaurantId) {
      try {
        this.isProcessing = true
        // STEP 3: 使用撰寫好的 addFavorite 方法去呼叫 API，並取得回傳內容
        const { data } = await usersAPI.addFavorite({ restaurantId })
        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // STEP 5: 請求成功的話，改變 Vue 內的資料狀態
        this.restaurant= {
        ...this.restaurant,
        isFavorited: true
        }
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        // STEP 6: 請求失敗的話則跳出錯誤提示
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant= {
        ...this.restaurant,  // 保留餐廳內原有資料(先複製一份)
        isFavorited: false   // 更改其中一項屬性的值
        }
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
    },
    async deleteLike(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteLike({restaurantId})

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant= {
        ...this.restaurant,
        isLiked: false
       }
       this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法對取消讚，請稍後再試'
        })
      }
    },
    async addLike(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addLike({restaurantId})

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant= {
        ...this.restaurant,
        isLiked: true
        }
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法對餐廳按讚，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>