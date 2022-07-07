<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
    </div>
    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination 
    :current-page="currentPage" 
    :total-page="totalPage"
    :previous-page="previousPage"
    :next-page="nextPage"
    :category-id="categoryId"
    />
  </div>
</template>

<script>
const dummyData = {
  "restaurants": [
      {
          "id": 5,
          "name": "Mrs. Oscar Rowe",
          "tel": "(597) 652-8105 x1354",
          "address": "704 Block Harbors",
          "opening_hours": "08:00",
          "description": "corrupti",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.132258702318715",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 11,
          "name": "Jayce Cremin",
          "tel": "087-658-3661 x1475",
          "address": "23896 Johns Mountain",
          "opening_hours": "08:00",
          "description": "Consectetur autem cupiditate.\nRepudiandae iusto vo",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.1716453817484327",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 16,
          "name": "Angus Hansen",
          "tel": "957-397-5874 x0554",
          "address": "12855 Daniel Overpass",
          "opening_hours": "08:00",
          "description": "Rerum reprehenderit dolorem qui itaque natus. Volu",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.29821137756305",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 17,
          "name": "Gabrielle Mann",
          "tel": "344-186-8669 x77406",
          "address": "8885 Sauer Extensions",
          "opening_hours": "08:00",
          "description": "quis",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.0352394936601",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 32,
          "name": "Marisol Hyatt",
          "tel": "(731) 489-9359 x04808",
          "address": "279 Ephraim Ports",
          "opening_hours": "08:00",
          "description": "qui",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.530270645170944",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 36,
          "name": "Ms. Art Lemke",
          "tel": "574-178-1960",
          "address": "035 Hirthe Hills",
          "opening_hours": "08:00",
          "description": "architecto ut ut",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.61275476775788",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 40,
          "name": "Mrs. Jovan Hintz",
          "tel": "552-656-4484 x650",
          "address": "95953 Marty Locks",
          "opening_hours": "08:00",
          "description": "Nisi rerum hic quia doloribus modi. Id repellendus",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.74920089806456",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 42,
          "name": "Beau Prosacco",
          "tel": "929-914-4011 x3931",
          "address": "318 Luettgen Avenue",
          "opening_hours": "08:00",
          "description": "Natus amet consectetur suscipit.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.937771750067263",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 44,
          "name": "Delfina Littel Sr.",
          "tel": "931.188.1481",
          "address": "917 Elna Motorway",
          "opening_hours": "08:00",
          "description": "Sunt sunt fuga optio.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.06016914120376",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 48,
          "name": "Maya Lynch",
          "tel": "(786) 983-5120 x00881",
          "address": "08661 Chasity Wall",
          "opening_hours": "08:00",
          "description": "Optio laborum similique itaque doloremque velit. C",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.94592725011208",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      }
  ],
  "categories": [
      {
          "id": 1,
          "name": "中式料理",
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z"
      },
      {
          "id": 2,
          "name": "日本料理",
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z"
      },
      {
          "id": 3,
          "name": "義大利料理",
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z"
      },
      {
          "id": 4,
          "name": "墨西哥料理",
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z"
      },
      {
          "id": 5,
          "name": "素食料理",
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z"
      },
      {
          "id": 6,
          "name": "美式料理",
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z"
      },
      {
          "id": 7,
          "name": "複合式料理",
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z"
      }
  ],
  "categoryId": "",
  "page": 1,
  "totalPage": [
      1,
      2,
      3,
      4,
      5
  ],
  "prev": 1,
  "next": 2
}

import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data() {
    return {
      restaurants:[],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      const {restaurants, categories, categoryId, page, totalPage, prev, next } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>