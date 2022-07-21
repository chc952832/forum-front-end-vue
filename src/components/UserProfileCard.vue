<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="user.image | emptyImage" width="300px" height="300px">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{user.name}}</h5>
        <p class="card-text">
          {{user.email}}
        </p>
        <ul class="list-unstyled list-inline">
          <li><strong>{{user.commentsLength}}</strong> 已評論餐廳</li>
          <li><strong>{{user.favoritedRestaurantsLength}}</strong> 收藏的餐廳</li>
          <li><strong>{{user.followingsLength}}</strong> followings (追蹤者)</li>
          <li><strong>{{user.followersLength}}</strong> followers (追隨者)</li>
        </ul>
        <p></p>
        <form action="/following/1?_method=DELETE" method="POST" style="display: contents;">
          <template v-if="isCurrentUser">
            <router-link
              :to="{ name: 'user-edit', params: { id: user.id } }"
              class="btn btn-primary"
            >
              Edit
            </router-link></template>
          <template v-else>
            <button type="submit" class="btn btn-danger"
          v-if="isFollowed"
          @click.stop.prevent="unFollow(user.id)"
          >取消追蹤</button>
           <button type="submit" class="btn btn-primary"
           v-else
           @click.stop.prevent="follow(user.id)"
           >追蹤</button></template>
        </form>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import {emptyImageFilter} from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helper'
export default {
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed
    }
  },
  watch: {
    // 監控是否有傳入新資料
    initialIsFollowed(newVal) {
      this.isFollowed = newVal
    }
  },
  methods: {
    async follow(userId) {
      try {
        const { data } = await usersAPI.addFollowing({userId})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isFollowed= true
      } catch(error) {
        Toast.fire({
          icon : 'error',
          title: '無法追蹤該使用者，請稍後再試'
        })
      }
    },
    async unFollow(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({userId})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isFollowed= false
      } catch(error) {
        Toast.fire({
          icon : 'error',
          title: '無法取消追蹤該使用者，請稍後再試'
        })
      }
    }
  }
}
</script>