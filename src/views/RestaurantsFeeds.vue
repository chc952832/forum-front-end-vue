<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'

const dummyData = {
  "restaurants": [
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
          }
      },
      {
          "id": 24,
          "name": "Howard King",
          "tel": "1-059-126-5610",
          "address": "45120 Cremin Squares",
          "opening_hours": "08:00",
          "description": "Soluta blanditiis iste nulla mollitia dolore est alias.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.4887201099137",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          }
      },
      {
          "id": 20,
          "name": "Josianne Bogan V",
          "tel": "431.257.2260 x8928",
          "address": "895 Glenda Gateway",
          "opening_hours": "08:00",
          "description": "Amet autem beatae sint. Voluptate sunt repellat eos. Architecto sunt et officiis odit.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.36608199776159",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          }
      },
      {
          "id": 1,
          "name": "Franco Boyer",
          "tel": "(765) 610-2179 x21150",
          "address": "65008 Eusebio Summit",
          "opening_hours": "08:00",
          "description": "sapiente ex nihil",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.02882729727115",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          }
      },
      {
          "id": 6,
          "name": "Spencer Block",
          "tel": "(773) 417-4836 x4901",
          "address": "851 Sauer Lane",
          "opening_hours": "08:00",
          "description": "autem",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.3705828460451",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          }
      },
      {
          "id": 30,
          "name": "Pierce Blanda",
          "tel": "1-517-788-9566",
          "address": "647 Lance Port",
          "opening_hours": "08:00",
          "description": "Vel qui eum quia tempora dignissimos reprehenderit eum.\nQuod sapiente qui nesciunt.\nOmnis illum placeat et ut tenetur dignissimos.\nDolorem perferendis eos molestias ut dolorem et.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.29608112177743",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          }
      },
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
          }
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
          }
      },
      {
          "id": 25,
          "name": "Viola Miller",
          "tel": "639.639.9774 x63988",
          "address": "988 Smitham Prairie",
          "opening_hours": "08:00",
          "description": "Eveniet porro deleniti quis. Ipsam et a molestiae reiciendis quia nisi nihil ea numquam.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.309576594339376",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          }
      },
      {
          "id": 26,
          "name": "Amy Feil",
          "tel": "(570) 159-5006 x654",
          "address": "073 Homenick Highway",
          "opening_hours": "08:00",
          "description": "In est et.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.71127248210433",
          "viewCounts": 0,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          }
      }
  ],
  "comments": [
      {
          "id": 7,
          "text": "Autem vel qui.",
          "UserId": 1,
          "RestaurantId": 7,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
              "isAdmin": true,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
              "id": 7,
              "name": "Madisen Trantow",
              "tel": "089.376.7467 x761",
              "address": "655 Gibson Junction",
              "opening_hours": "08:00",
              "description": "quis",
              "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.87397183491203",
              "viewCounts": 0,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z",
              "CategoryId": 2
          }
      },
      {
          "id": 31,
          "text": "Ut officiis quia dolorum.",
          "UserId": 1,
          "RestaurantId": 31,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
              "isAdmin": true,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
              "id": 31,
              "name": "Abigayle Pagac",
              "tel": "(579) 584-7710",
              "address": "403 Domenick Rapid",
              "opening_hours": "08:00",
              "description": "Eum eaque officia qui voluptatibus facilis maxime aliquid aut et. Et facere maiores. Molestiae rerum asperiores provident eum saepe soluta non. Sunt quis tempora autem eaque. Cum omnis ea.\n \rSit est ipsum. Laudantium et aut possimus in et. Aut architecto repudiandae eligendi quia neque fugit iusto id maxime.\n \rNostrum expedita consequatur nesciunt ullam quos esse illo quia. Natus eaque iste numquam laborum tenetur. Nobis amet aut possimus corporis. Ad est ut.",
              "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.2320967470228",
              "viewCounts": 0,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z",
              "CategoryId": 3
          }
      },
      {
          "id": 57,
          "text": "Nisi voluptas aut nulla vel nobis.",
          "UserId": 1,
          "RestaurantId": 7,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
              "isAdmin": true,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
              "id": 7,
              "name": "Madisen Trantow",
              "tel": "089.376.7467 x761",
              "address": "655 Gibson Junction",
              "opening_hours": "08:00",
              "description": "quis",
              "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.87397183491203",
              "viewCounts": 0,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z",
              "CategoryId": 2
          }
      },
      {
          "id": 84,
          "text": "Inventore non molestias quis quia sed minus.",
          "UserId": 1,
          "RestaurantId": 34,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
              "isAdmin": true,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
              "id": 34,
              "name": "Brenda Bergstrom",
              "tel": "138.920.1182 x11133",
              "address": "629 Ritchie Islands",
              "opening_hours": "08:00",
              "description": "Omnis consequatur quis voluptates.",
              "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.61979757039802",
              "viewCounts": 0,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z",
              "CategoryId": 2
          }
      },
      {
          "id": 106,
          "text": "Consectetur aut error deserunt.",
          "UserId": 1,
          "RestaurantId": 6,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
              "isAdmin": true,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
              "id": 6,
              "name": "Spencer Block",
              "tel": "(773) 417-4836 x4901",
              "address": "851 Sauer Lane",
              "opening_hours": "08:00",
              "description": "autem",
              "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.3705828460451",
              "viewCounts": 0,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z",
              "CategoryId": 5
          }
      },
      {
          "id": 132,
          "text": "Cum quidem delectus aut.",
          "UserId": 1,
          "RestaurantId": 32,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
              "isAdmin": true,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
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
              "CategoryId": 1
          }
      },
      {
          "id": 8,
          "text": "Fugit aperiam recusandae ea et tempore ab delectus.",
          "UserId": 2,
          "RestaurantId": 8,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 2,
              "name": "user1",
              "email": "user1@example.com",
              "password": "$2a$10$JK625lENOSIBB8d/niJM/uid1JwvsjAzkkpQD9l7uNl7tHoRo0ISW",
              "isAdmin": false,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
              "id": 8,
              "name": "Eloise Ebert",
              "tel": "(913) 542-9035 x137",
              "address": "571 Murphy Expressway",
              "opening_hours": "08:00",
              "description": "Molestiae iste aut unde. Distinctio enim facere quaerat non incidunt repudiandae non minus ut. Laboriosam aut consectetur. Impedit quia omnis totam. Ea et doloribus vel accusamus aperiam cupiditate. Qui incidunt at qui.",
              "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.38978172169554",
              "viewCounts": 0,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z",
              "CategoryId": 5
          }
      },
      {
          "id": 28,
          "text": "Voluptas ipsa nisi nisi sed suscipit.",
          "UserId": 2,
          "RestaurantId": 28,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 2,
              "name": "user1",
              "email": "user1@example.com",
              "password": "$2a$10$JK625lENOSIBB8d/niJM/uid1JwvsjAzkkpQD9l7uNl7tHoRo0ISW",
              "isAdmin": false,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
              "id": 28,
              "name": "Mallory Turner",
              "tel": "480.448.8440",
              "address": "1256 Zola Turnpike",
              "opening_hours": "08:00",
              "description": "Est omnis est. Architecto alias consequatur sint temporibus qui aperiam aliquid unde ipsum. Beatae qui qui est sequi debitis doloremque. Dolorem voluptas ut qui adipisci soluta perferendis ipsum ducimus. Dolorem qui expedita consequatur et qui accusamus.\n \rQui omnis sed enim dignissimos ea omnis voluptatem ut. Voluptatem nulla consequatur nihil illum qui officia delectus. Nam sit consequatur perspiciatis veritatis distinctio ut magnam adipisci.\n \rSint magnam eveniet in. Incidunt magnam impedit sit necessitatibus illum voluptas quis maiores. Suscipit illum expedita dolor qui.",
              "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.77862242529241",
              "viewCounts": 0,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z",
              "CategoryId": 4
          }
      },
      {
          "id": 49,
          "text": "Et et molestiae perferendis et nam.",
          "UserId": 2,
          "RestaurantId": 49,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 2,
              "name": "user1",
              "email": "user1@example.com",
              "password": "$2a$10$JK625lENOSIBB8d/niJM/uid1JwvsjAzkkpQD9l7uNl7tHoRo0ISW",
              "isAdmin": false,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
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
              "CategoryId": 4
          }
      },
      {
          "id": 70,
          "text": "Odio odio placeat ratione a.",
          "UserId": 2,
          "RestaurantId": 20,
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "User": {
              "id": 2,
              "name": "user1",
              "email": "user1@example.com",
              "password": "$2a$10$JK625lENOSIBB8d/niJM/uid1JwvsjAzkkpQD9l7uNl7tHoRo0ISW",
              "isAdmin": false,
              "image": null,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z"
          },
          "Restaurant": {
              "id": 20,
              "name": "Josianne Bogan V",
              "tel": "431.257.2260 x8928",
              "address": "895 Glenda Gateway",
              "opening_hours": "08:00",
              "description": "Amet autem beatae sint. Voluptate sunt repellat eos. Architecto sunt et officiis odit.",
              "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.36608199776159",
              "viewCounts": 0,
              "createdAt": "2022-07-02T19:36:40.000Z",
              "updatedAt": "2022-07-02T19:36:40.000Z",
              "CategoryId": 3
          }
      }
  ]
}

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeed()
  },
  methods: {
    // 也可以用解構賦值的方式寫
    // fetchFeed() {
    //   const {restaurants, comments} = dummyData
    //   this.restaurants = restaurants
    //   this.comments = comments
    // }
    fetchFeed() {
      this.restaurants = dummyData.restaurants
      // filter()過濾餐廳及評論內容仍存在的comment, 如果Restaurant: null會被過濾掉
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text)
    }
  }
}
</script>