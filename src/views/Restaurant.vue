<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail :initial-restaurant="restaurant" />
      <hr />
      <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments
        :restaurant-comments="restaurantComments"
        @after-delete-comment="afterDeleteComment"
      />
      <!-- 新增評論 CreateComment -->
      <CreateComment
        :restaurant-id="restaurant.id"
        @after-create-comment="afterCreateComment"
      />
    </template>
  </div>
</template>

<script>
// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: '管理者',
//     email: 'root@example.com',
//     image: 'https://i.pravatar.cc/300',
//     isAdmin: true
//   },
//   isAuthenticated: true
// }

// const dummyData = {
//   "restaurant": {
//       "id": 1,
//       "name": "Franco Boyer",
//       "tel": "(765) 610-2179 x21150",
//       "address": "65008 Eusebio Summit",
//       "opening_hours": "08:00",
//       "description": "sapiente ex nihil",
//       "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.02882729727115",
//       "viewCounts": 1,
//       "createdAt": "2022-07-02T19:36:40.000Z",
//       "updatedAt": "2022-07-05T20:47:25.275Z",
//       "CategoryId": 4,
//       "Category": {
//           "id": 4,
//           "name": "墨西哥料理",
//           "createdAt": "2022-07-02T19:36:40.000Z",
//           "updatedAt": "2022-07-02T19:36:40.000Z"
//       },
//       "FavoritedUsers": [],
//       "LikedUsers": [],
//       "Comments": [
//           {
//               "id": 1,
//               "text": "Voluptates enim nisi ad enim perspiciatis possimus.",
//               "UserId": 1,
//               "RestaurantId": 1,
//               "createdAt": "2022-07-02T19:36:40.000Z",
//               "updatedAt": "2022-07-02T19:36:40.000Z",
//               "User": {
//                   "id": 1,
//                   "name": "root",
//                   "email": "root@example.com",
//                   "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
//                   "isAdmin": true,
//                   "image": null,
//                   "createdAt": "2022-07-02T19:36:40.000Z",
//                   "updatedAt": "2022-07-02T19:36:40.000Z"
//               }
//           },
//           {
//               "id": 51,
//               "text": "Porro et illo vel voluptas et soluta voluptate blanditiis.",
//               "UserId": 1,
//               "RestaurantId": 1,
//               "createdAt": "2022-07-02T19:36:40.000Z",
//               "updatedAt": "2022-07-02T19:36:40.000Z",
//               "User": {
//                   "id": 1,
//                   "name": "root",
//                   "email": "root@example.com",
//                   "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
//                   "isAdmin": true,
//                   "image": null,
//                   "createdAt": "2022-07-02T19:36:40.000Z",
//                   "updatedAt": "2022-07-02T19:36:40.000Z"
//               }
//           },
//           {
//               "id": 101,
//               "text": "Quos consectetur optio hic labore.",
//               "UserId": 1,
//               "RestaurantId": 1,
//               "createdAt": "2022-07-02T19:36:40.000Z",
//               "updatedAt": "2022-07-02T19:36:40.000Z",
//               "User": {
//                   "id": 1,
//                   "name": "root",
//                   "email": "root@example.com",
//                   "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
//                   "isAdmin": true,
//                   "image": null,
//                   "createdAt": "2022-07-02T19:36:40.000Z",
//                   "updatedAt": "2022-07-02T19:36:40.000Z"
//               }
//           }
//       ]
//   },
//   "isFavorited": false,
//   "isLiked": false
// }

import RestaurantDetail from "./../components/RestaurantDetail.vue";
import RestaurantComments from "./../components/RestaurantComments.vue";
import CreateComment from "./../components/CreateComment.vue";
import Spinner from "./../components/Spinner.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helper";
import { mapState } from "vuex";
export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      // currentUser: dummyUser.currentUser,
      restaurantComments: [],
      isLoading: true,
    };
  },
  // 從 Vuex 取得 currentUser 的資料
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        this.isLoading = true;
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });
        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours, // 解構賦值後改成後面的名字(openingHours)
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        (this.restaurant = {
          id,
          name,
          Category,
          image,
          // 如果Category是null, 則放入'未分類'
          categoryName: Category ? Category.name : "未分類",
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        }),
          (this.restaurantComments = Comments);
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(), // 直接抓當下時間
      });
    },
  },
};
</script>