<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>

      <hr />
      <RestaurantTop
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantTop from "./../components/RestaurantTop.vue";
import Spinner from "./../components/Spinner.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helper";

export default {
  components: {
    NavTabs,
    RestaurantTop,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      isLoading: true
    };
  },
  methods: {
    async fetchRestaurantsTop() {
      try {
        this.isLoading = true
        const { data } = await restaurantsAPI.getTop();
        const { restaurants } = data;
        this.restaurants = restaurants;
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳資料，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchRestaurantsTop();
  },
};
</script>