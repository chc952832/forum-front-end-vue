<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <UserCard 
      v-for="user in users" 
      :key="user.id"
      :initial-user="user"/>
    </div>
  </div>
</template>

<script>
const dummyData = {
  "users": [
      {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$75ECfZeCAP6jjrtfRQY6M.JmmqFFkOSlFoN41j7w1VjmYcWNlh7PW",
          "isAdmin": true,
          "image": 'https://i.imgur.com/2js0afa.jpg',
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      },
      {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$JK625lENOSIBB8d/niJM/uid1JwvsjAzkkpQD9l7uNl7tHoRo0ISW",
          "isAdmin": false,
          "image": 'https://pbs.twimg.com/media/FF-Ek0nVUAEOfsH.png',
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      },
      {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$i6wMMzH9OLXzdHaorPVglOk373SREFyL5dHvyrvOvPjmbm.//8D0a",
          "isAdmin": false,
          "image": 'https://pbs.twimg.com/media/FF-Emb1VcAI3GXJ.png',
          "createdAt": "2022-07-02T19:36:40.000Z",
          "updatedAt": "2022-07-02T19:36:40.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      }
  ]
}

import NavTabs from './../components/NavTabs.vue'
import UserCard from './../components/UserCard.vue'
export default {
  components: {
    NavTabs,
    UserCard
  },
  data () {
    return {
      users:[]
    }
  },
  methods: {
    fetchUsers() {
      const {users} = dummyData
      this.users = users
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>