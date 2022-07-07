<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <RestaurantTop v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantTop from './../components/RestaurantTop.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Dr. Ignacio Ryan",
            "tel": "(175) 334-2134",
            "address": "24756 Bradtke Common",
            "opening_hours": "08:00",
            "description": "Nesciunt velit voluptatem molestiae sed facere bla",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.370560879446653",
            "viewCounts": 0,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Chance Keebler",
            "tel": "1-452-180-0441 x1662",
            "address": "8605 Feest Point",
            "opening_hours": "08:00",
            "description": "rerum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.61573810404113",
            "viewCounts": 0,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
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
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Dolly Mann",
            "tel": "1-352-649-7910 x6673",
            "address": "1178 Ferry Keys",
            "opening_hours": "08:00",
            "description": "quisquam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.80448744771144",
            "viewCounts": 0,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Enos McLaughlin",
            "tel": "(353) 465-4815",
            "address": "601 Newell Junctions",
            "opening_hours": "08:00",
            "description": "Ut hic ullam nobis rem. Dolore qui et. Perferendis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.73293220080443",
            "viewCounts": 0,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Marcellus Block",
            "tel": "1-213-177-3344 x80783",
            "address": "1272 Elena Crossroad",
            "opening_hours": "08:00",
            "description": "aliquam explicabo fugiat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.864378997504537",
            "viewCounts": 0,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
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
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Braeden Shields",
            "tel": "438-532-1212 x1590",
            "address": "3006 Rempel Common",
            "opening_hours": "08:00",
            "description": "sapiente",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.63197591353773",
            "viewCounts": 0,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
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
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Kelvin Nolan",
            "tel": "098-783-5799",
            "address": "8638 Jerrold Circles",
            "opening_hours": "08:00",
            "description": "Inventore illum possimus et pariatur veritatis. Qu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.95477764779843",
            "viewCounts": 0,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  components: {
    NavTabs,
    RestaurantTop
  },
  data () {
    return {
      restaurants: []
    }
  },
  methods: {
    fetchRestaurantsTop() {
      const { restaurants } = dummyData
      this.restaurants = restaurants
    }
  },
  created() {
    this.fetchRestaurantsTop()
  }
}
</script>