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
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helper'
import { mapState } from 'vuex'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data () {
    return {
      users: [],
    //   currentUser: {
    //     id: -1,
    //     isAdmin: true
    //   }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get()
        const {users} = data
        // const {profile} = this.currentUser
        // const {id, isAdmin} = profile
        this.users = users
        // this.currentUser = {id, isAdmin}
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者清單，請稍後再試'
        })
      }
    },
    async toggleIsAdmin(userId) {
      try {
        const { data } = await adminAPI.users.toggleIsAdmin({userId})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.users= this.users.map(user => {
            if (user.id === userId) {
            return {
            ...user,
            isAdmin: !user.isAdmin
            }
            }
            return user
        })
      } catch(error) {

      }
    }
  }
}
</script>