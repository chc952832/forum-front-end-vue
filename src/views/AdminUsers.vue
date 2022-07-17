<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <template v-if="user.isAdmin">
            <td>admin</td>
            <td v-if="currentUser.id !== user.id">
              <button
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleIsAdmin(user.id)"
              >
                set as user
              </button>
            </td>
          </template>
          <template v-else>
            <td>user</td>
            <td>
              <button
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleIsAdmin(user.id)"
              >
                set as admin
              </button>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav.vue'

const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$JK625lENOSIBB8d/niJM/uid1JwvsjAzkkpQD9l7uNl7tHoRo0ISW",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$i6wMMzH9OLXzdHaorPVglOk373SREFyL5dHvyrvOvPjmbm.//8D0a",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-02T19:36:40.000Z",
            "updatedAt": "2022-07-02T19:36:40.000Z"
        }
    ]
}
const dummyUser = {
    "profile": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-07-02T19:36:40.000Z",
        "updatedAt": "2022-07-02T19:36:40.000Z",
        "Comments": [
            {
                "id": 1,
                "text": "Voluptates enim nisi ad enim perspiciatis possimus.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 2,
                "text": "Excepturi in optio adipisci.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 7,
                "text": "Autem vel qui.",
                "UserId": 1,
                "RestaurantId": 7,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
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
                "id": 14,
                "text": "Qui harum consequuntur ut molestiae dolore fugiat atque impedit perspiciatis.",
                "UserId": 1,
                "RestaurantId": 14,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 15,
                "text": "In laborum consequatur dolor nostrum dolor nam quidem.",
                "UserId": 1,
                "RestaurantId": 15,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 19,
                "text": "Id maxime culpa non pariatur quia non eos omnis.",
                "UserId": 1,
                "RestaurantId": 19,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 22,
                "text": "Perferendis molestiae sequi.",
                "UserId": 1,
                "RestaurantId": 22,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 23,
                "text": "Fugiat autem aut voluptatem rerum accusamus.",
                "UserId": 1,
                "RestaurantId": 23,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 25,
                "text": "Qui non ducimus illo repellat nostrum.",
                "UserId": 1,
                "RestaurantId": 25,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 30,
                "text": "Aut itaque omnis culpa ipsum quo explicabo quis.",
                "UserId": 1,
                "RestaurantId": 30,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 31,
                "text": "Ut officiis quia dolorum.",
                "UserId": 1,
                "RestaurantId": 31,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
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
                "id": 32,
                "text": "Expedita sint quasi voluptatem illum quo et et praesentium.",
                "UserId": 1,
                "RestaurantId": 32,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
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
                "id": 35,
                "text": "Saepe non itaque nihil.",
                "UserId": 1,
                "RestaurantId": 35,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 44,
                "text": "Quos iusto dolor porro est hic laborum.",
                "UserId": 1,
                "RestaurantId": 44,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 47,
                "text": "Ipsam totam deserunt ut explicabo natus dolor dolor ipsum nulla.",
                "UserId": 1,
                "RestaurantId": 47,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 50,
                "text": "Optio laborum cumque cum deserunt.",
                "UserId": 1,
                "RestaurantId": 50,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 51,
                "text": "Porro et illo vel voluptas et soluta voluptate blanditiis.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 52,
                "text": "Optio nostrum assumenda hic iure sint quaerat.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                "id": 60,
                "text": "Qui sit libero excepturi sunt sequi ratione.",
                "UserId": 1,
                "RestaurantId": 10,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 61,
                "text": "Incidunt totam amet.",
                "UserId": 1,
                "RestaurantId": 11,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 62,
                "text": "Quibusdam nostrum blanditiis velit temporibus aperiam soluta similique impedit.",
                "UserId": 1,
                "RestaurantId": 12,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 69,
                "text": "Architecto vero et ea omnis velit qui aut.",
                "UserId": 1,
                "RestaurantId": 19,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 72,
                "text": "Sed nam eos explicabo omnis facilis.",
                "UserId": 1,
                "RestaurantId": 22,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 74,
                "text": "Est magnam commodi culpa repudiandae magnam vel quo expedita blanditiis.",
                "UserId": 1,
                "RestaurantId": 24,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 82,
                "text": "Culpa ut quis nihil.",
                "UserId": 1,
                "RestaurantId": 32,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
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
                "id": 84,
                "text": "Inventore non molestias quis quia sed minus.",
                "UserId": 1,
                "RestaurantId": 34,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
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
                "id": 88,
                "text": "Qui quod iusto ex quia in repellendus.",
                "UserId": 1,
                "RestaurantId": 38,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 95,
                "text": "Voluptatibus quod nisi sunt tempore ut aut.",
                "UserId": 1,
                "RestaurantId": 45,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 100,
                "text": "Itaque atque aliquam et quaerat.",
                "UserId": 1,
                "RestaurantId": 50,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 101,
                "text": "Quos consectetur optio hic labore.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 102,
                "text": "Laboriosam atque quisquam.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 104,
                "text": "Fugiat hic aspernatur voluptatibus molestiae repudiandae dolore recusandae perspiciatis.",
                "UserId": 1,
                "RestaurantId": 4,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 105,
                "text": "Adipisci et ipsam iusto.",
                "UserId": 1,
                "RestaurantId": 5,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 106,
                "text": "Consectetur aut error deserunt.",
                "UserId": 1,
                "RestaurantId": 6,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
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
                "id": 109,
                "text": "Qui nobis nobis rerum aliquid nesciunt corporis voluptas est est.",
                "UserId": 1,
                "RestaurantId": 9,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 111,
                "text": "Modi numquam at.",
                "UserId": 1,
                "RestaurantId": 11,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 112,
                "text": "Fuga excepturi voluptas eum autem facere officia veniam.",
                "UserId": 1,
                "RestaurantId": 12,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 114,
                "text": "Nam pariatur in recusandae eos sit.",
                "UserId": 1,
                "RestaurantId": 14,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 116,
                "text": "Veritatis veniam et perspiciatis saepe.",
                "UserId": 1,
                "RestaurantId": 16,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 122,
                "text": "Quidem asperiores non eius explicabo atque harum quis modi.",
                "UserId": 1,
                "RestaurantId": 22,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 124,
                "text": "Assumenda temporibus est.",
                "UserId": 1,
                "RestaurantId": 24,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 132,
                "text": "Cum quidem delectus aut.",
                "UserId": 1,
                "RestaurantId": 32,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
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
                "id": 137,
                "text": "Quod est perferendis sed sed qui ipsa.",
                "UserId": 1,
                "RestaurantId": 37,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 140,
                "text": "Debitis illum veritatis reprehenderit omnis aut eius debitis.",
                "UserId": 1,
                "RestaurantId": 40,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 147,
                "text": "Nostrum voluptas nam dignissimos voluptatem.",
                "UserId": 1,
                "RestaurantId": 47,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 148,
                "text": "Nostrum nihil occaecati inventore necessitatibus.",
                "UserId": 1,
                "RestaurantId": 48,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
                "Restaurant": {
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
                    "CategoryId": 1
                }
            },
            {
                "id": 149,
                "text": "Consectetur et ut dolorum aspernatur.",
                "UserId": 1,
                "RestaurantId": 49,
                "createdAt": "2022-07-02T19:36:40.000Z",
                "updatedAt": "2022-07-02T19:36:40.000Z",
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
            }
        ],
        "FavoritedRestaurants": [],
        "Followers": [],
        "Followings": []
    },
    "isFollowed": false
}

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data () {
    return {
      users: [],
      currentUser: {
        id: -1,
        isAdmin: true
      }
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      const {users} = dummyData
      const {profile} = dummyUser
      const {id, isAdmin} = profile
      this.users = users
      this.currentUser = {id, isAdmin}
    },
    toggleIsAdmin(userId) {
      this.users= this.users.map(user => {
        if (user.id === userId) {
          return {
          ...user,
          isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  }
}
</script>