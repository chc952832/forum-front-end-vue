<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
            {{restaurant.name}}
          </router-link>
          <small>{{restaurant.Category ? restaurant.Category.name : "未分類"}}</small>
        </h4>
        <p>{{restaurant.description}}</p>
        {{restaurant.createdAt | fromNow}}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins.js'
export default {
  props: {
    restaurants :{
      type: Array,  // 表示資料的型別，資料傳進來時Vue會幫忙檢查，如不符合會報錯
      required: true  // 表示這組資料是必要的，資料沒有傳進來會報錯
    }
  },
  mixins: [fromNowFilter]
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>