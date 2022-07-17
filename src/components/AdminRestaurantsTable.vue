<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id } }"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{name: 'admin-restaurant-edit', params: {id: restaurant.id } }"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
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
            }
        },
        {
            "id": 11,
            "name": "Jayce Cremin",
            "tel": "087-658-3661 x1475",
            "address": "23896 Johns Mountain",
            "opening_hours": "08:00",
            "description": "Consectetur autem cupiditate.\nRepudiandae iusto voluptatem voluptatem nostrum.\nAut iste sint nostrum sed minus.",
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
            }
        },
        {
            "id": 16,
            "name": "Angus Hansen",
            "tel": "957-397-5874 x0554",
            "address": "12855 Daniel Overpass",
            "opening_hours": "08:00",
            "description": "Rerum reprehenderit dolorem qui itaque natus. Voluptate quis ex cum. Debitis quod id sunt suscipit et consectetur repudiandae nam dolores.\n \rQuibusdam officiis autem aliquid dolorem nostrum laboriosam voluptatem quo excepturi. Necessitatibus rerum rerum ab id esse rerum ut. Omnis iusto aut quia enim libero consequuntur. Dignissimos eum beatae.\n \rEst numquam consequuntur laudantium aut rerum modi. Dolorem dolorem minima quo sapiente odit. Aliquam tempora dignissimos ipsam vel reiciendis rerum. Aperiam ad sunt laboriosam nulla tempora laborum et pariatur. Dolores voluptatibus ab maxime pariatur.",
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
            }
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
            }
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
            }
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
            }
        },
        {
            "id": 40,
            "name": "Mrs. Jovan Hintz",
            "tel": "552-656-4484 x650",
            "address": "95953 Marty Locks",
            "opening_hours": "08:00",
            "description": "Nisi rerum hic quia doloribus modi. Id repellendus inventore dicta incidunt et dolorum. Voluptatem eos porro esse. Facilis voluptatem nisi aut ea labore fuga error officiis. Voluptatem expedita sunt ut. Vel modi expedita qui quo vitae accusantium laborum.",
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
            }
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
            "id": 48,
            "name": "Maya Lynch",
            "tel": "(786) 983-5120 x00881",
            "address": "08661 Chasity Wall",
            "opening_hours": "08:00",
            "description": "Optio laborum similique itaque doloremque velit. Consequatur voluptatem aliquam voluptatibus voluptas quis. Pariatur expedita expedita et impedit maiores saepe blanditiis tempora. A voluptatem quos. Delectus id aut velit explicabo. Omnis voluptatem asperiores dolorem rem.\n \rAsperiores aliquam ea ut. Voluptatem non et amet ipsum sed maiores asperiores. Quis beatae facilis voluptatem nostrum aut assumenda officia qui officia. Dolore omnis rem ullam neque et eum voluptatem non aut. Illum voluptas deleniti quas repellendus commodi est odio. Sint non numquam vel repudiandae magni rerum ea.\n \rEt saepe quia in consequatur. Omnis animi dolor enim at qui ut fugit illum. Voluptas magni aut cumque odit autem ut.",
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
            }
        },
        {
            "id": 3,
            "name": "Dejon Lockman",
            "tel": "720-839-2512 x734",
            "address": "7717 Jazmyne Meadow",
            "opening_hours": "08:00",
            "description": "Aliquid quasi eius quia cum dicta velit.\nDeserunt perferendis ex hic deleniti deserunt fuga consectetur temporibus ullam.\nTemporibus illo numquam recusandae id reiciendis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.250085254960204",
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
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z"
            }
        },
        {
            "id": 15,
            "name": "Rahsaan Stokes PhD",
            "tel": "(843) 480-7397 x217",
            "address": "2902 Woodrow Villages",
            "opening_hours": "08:00",
            "description": "Incidunt eaque aut modi rerum dolor qui ea saepe.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.409098553718202",
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
            "id": 19,
            "name": "Billy Hirthe",
            "tel": "(971) 713-8607 x82662",
            "address": "825 Kreiger Roads",
            "opening_hours": "08:00",
            "description": "quae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.75128972640768",
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
            "id": 23,
            "name": "Lilly Gutkowski V",
            "tel": "434.092.2866",
            "address": "14265 Abbott Village",
            "opening_hours": "08:00",
            "description": "Et velit alias necessitatibus vel officiis sint corrupti voluptatem in.\nAspernatur occaecati fugit eligendi suscipit repellendus vero.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.01536001747235",
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
            "id": 27,
            "name": "Dewayne Haley",
            "tel": "(840) 854-1570 x955",
            "address": "694 Orpha Bypass",
            "opening_hours": "08:00",
            "description": "Sint ex ut neque. Aut nulla voluptate iste dolores.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.7070461799924",
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
            "id": 33,
            "name": "Eleazar Walsh",
            "tel": "1-452-672-9742 x94154",
            "address": "04293 Lubowitz Skyway",
            "opening_hours": "08:00",
            "description": "Et autem maxime et voluptas.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.55881938214735",
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
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z"
            }
        },
        {
            "id": 37,
            "name": "Edythe Cormier",
            "tel": "(440) 116-5751 x18794",
            "address": "6553 Beahan Shores",
            "opening_hours": "08:00",
            "description": "Ipsum in ad impedit dolor voluptas.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.994227320306905",
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
            "id": 2,
            "name": "Kirk Runolfsdottir",
            "tel": "939-531-2236 x694",
            "address": "542 Bergstrom Haven",
            "opening_hours": "08:00",
            "description": "mollitia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.10109721102875",
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
            "id": 4,
            "name": "Rachel Altenwerth",
            "tel": "1-003-831-6447 x23649",
            "address": "1556 Gottlieb Lights",
            "opening_hours": "08:00",
            "description": "Totam aut et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.58082716750592",
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
        },
        {
            "id": 29,
            "name": "Nina Bergnaum",
            "tel": "1-228-276-4145 x24374",
            "address": "1882 Hermann Harbor",
            "opening_hours": "08:00",
            "description": "quia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.09765639997683",
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
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z"
            }
        },
        {
            "id": 39,
            "name": "Mr. Modesto Beer",
            "tel": "494.360.8664 x12573",
            "address": "79140 Rashad Gardens",
            "opening_hours": "08:00",
            "description": "Reprehenderit et ipsum soluta dolor quam doloremque eveniet. Aut provident quos minima culpa. Porro maiores numquam illum.\n \rDolor voluptatibus facilis quam quas maxime ab enim ut iusto. Fugiat voluptatem aperiam quia quia quidem facere. Architecto in maxime voluptas aut aut in ea.\n \rNulla autem suscipit sit voluptate et ea dolor et. Laborum dolor maiores dolor delectus voluptatibus. Assumenda voluptatem tempora voluptatibus facere.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.4472274869803847",
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
            "id": 41,
            "name": "Kelvin Nolan",
            "tel": "098-783-5799",
            "address": "8638 Jerrold Circles",
            "opening_hours": "08:00",
            "description": "Inventore illum possimus et pariatur veritatis. Quibusdam qui odio voluptas. Culpa consequuntur suscipit facere non. Eum cumque est laboriosam porro magni perferendis harum quae.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.95477764779843",
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
            "id": 46,
            "name": "Enos McLaughlin",
            "tel": "(353) 465-4815",
            "address": "601 Newell Junctions",
            "opening_hours": "08:00",
            "description": "Ut hic ullam nobis rem. Dolore qui et. Perferendis laboriosam explicabo consequatur suscipit cupiditate quibusdam. Necessitatibus fugit et impedit dolor. Qui et dolor suscipit cum perspiciatis accusantium rem culpa inventore. Accusantium non libero architecto maxime eius nobis.\n \rEt sint natus rem veniam facere. Recusandae perspiciatis illum suscipit cum quam officia laboriosam. Corporis expedita doloremque deserunt quo alias officiis non autem et. Nostrum atque omnis non nemo consequatur accusamus. Omnis necessitatibus impedit. Sunt est iure ut aut.\n \rQuidem ipsum fugiat. Beatae illum iusto quia aut. Aut voluptatem sunt alias.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.73293220080443",
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
            "viewCounts": 1,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-05T20:47:25.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z"
            }
        },
        {
            "id": 10,
            "name": "Samanta Keebler",
            "tel": "(806) 985-5962 x37882",
            "address": "11280 Dorian Turnpike",
            "opening_hours": "08:00",
            "description": "Sint minus consectetur eius ipsum voluptate.\nAssumenda illum exercitationem fugiat dolorem hic qui sint.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.093323635104891",
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
            "id": 12,
            "name": "Fatima Jaskolski PhD",
            "tel": "767.799.4368 x233",
            "address": "64372 Turcotte Plaza",
            "opening_hours": "08:00",
            "description": "Officiis ut non. Ut repellat deleniti deleniti tenetur. Ut sed ut qui velit quos asperiores corrupti ut dolorem. Voluptatum inventore aut officiis consequatur saepe ullam placeat aut ut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.04049237863038",
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
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z"
            }
        },
        {
            "id": 35,
            "name": "Kane Harber",
            "tel": "(535) 581-2195",
            "address": "7176 Travis Prairie",
            "opening_hours": "08:00",
            "description": "Nemo animi quia officia sed omnis dolor vero sequi dolores. Labore temporibus aperiam voluptatem fugit labore. Sequi recusandae aspernatur dolore. Distinctio dolor veritatis sed omnis amet consequatur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.72667503018327",
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
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z"
            }
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
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z"
            }
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
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z"
            }
        },
        {
            "id": 9,
            "name": "Lexie Kiehn",
            "tel": "(070) 540-8788",
            "address": "7174 Owen Ville",
            "opening_hours": "08:00",
            "description": "nam rerum est",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.77193402685241",
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
            "id": 13,
            "name": "Nolan Raynor",
            "tel": "(380) 489-0466 x33895",
            "address": "1046 Ewald Cliff",
            "opening_hours": "08:00",
            "description": "Velit officia similique.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.112097442468603",
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
            "id": 14,
            "name": "Angel Braun",
            "tel": "396.864.4255 x16189",
            "address": "7141 Ahmad Pines",
            "opening_hours": "08:00",
            "description": "consectetur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.146582280666287",
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
            "id": 18,
            "name": "Cicero Koelpin",
            "tel": "299.157.9746",
            "address": "6905 Bernhard Underpass",
            "opening_hours": "08:00",
            "description": "non quo ut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.079861728540166",
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
            "id": 21,
            "name": "Grant Hackett",
            "tel": "(411) 202-1823 x014",
            "address": "9111 Jewel Plaza",
            "opening_hours": "08:00",
            "description": "Autem tempora reiciendis quis dolores tenetur qui expedita quia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.24030415676718",
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
            "id": 22,
            "name": "Presley Pouros",
            "tel": "790.081.4793 x768",
            "address": "8427 Morar Summit",
            "opening_hours": "08:00",
            "description": "Reiciendis et velit sit quam odit minima placeat tenetur rerum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.314048696839485",
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
            "id": 38,
            "name": "Madyson Dare PhD",
            "tel": "1-729-982-3095",
            "address": "64610 Desmond Dale",
            "opening_hours": "08:00",
            "description": "Voluptas enim consequuntur reiciendis.\nLibero et velit consequatur dolor repellat eum enim labore.\nItaque eius corrupti porro mollitia aut et facere.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.24865811685947",
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
            "id": 50,
            "name": "Dr. Ignacio Ryan",
            "tel": "(175) 334-2134",
            "address": "24756 Bradtke Common",
            "opening_hours": "08:00",
            "description": "Nesciunt velit voluptatem molestiae sed facere blanditiis. Soluta non consequatur id natus sunt nostrum. Et est est est mollitia omnis ut. Qui molestiae iusto incidunt distinctio laboriosam vel rerum. Velit placeat voluptatem facilis nihil corporis nihil et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.370560879446653",
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
        }
    ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(restaurant=> restaurant.id !== restaurantId)
    }
  }
}
</script>