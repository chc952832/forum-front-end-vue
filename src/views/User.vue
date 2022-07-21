<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="card mb-3">
        <!-- UserProfileCard -->
        <UserProfileCard 
        :user="user"
        :initial-is-followed="isFollowed"
        :is-current-user="currentUser.id === user.id"
        />
      </div>

      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard :followings="followings"/>
          <br>
          <!-- UserFollowersCard -->
          <UserFollowersCard :followers="followers"/>
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard :comments="comments"/>
          <br>
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard :favorited-restaurants="favoritedRestaurants"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard.vue'
import UserFollowingsCard from './../components/UserFollowingsCard.vue'
import UserFollowersCard from './../components/UserFollowersCard.vue'
import UserCommentsCard from './../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard.vue'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helper'
import { mapState } from 'vuex'

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
export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
    return {
      user: {
        id: -1,
        name: '',
        email: '',
        image: '',
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followersLength:0,
        followingsLength: 0
      },
      isFollowed: false,
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings:[],
      // currentUser: {}
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        const { data } = await usersAPI.get({userId})
        const {profile, isFollowed} = data
        const {id, name, email, image, Comments, FavoritedRestaurants, Followers, Followings} = profile
        this.user = {
          ...this.user,
          id,
          name,
          email,
          image,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
          followersLength: Followers.length,
          followingsLength: Followings
        .length
        }
        this.isFollowed = isFollowed
        // 處理 comment.Restaurant 可能有空值的情況
        this.comments = Comments.filter(comment => comment.Restaurant)
        this.favoritedRestaurants = FavoritedRestaurants
        this.followers= Followers
        this.followings = Followings
        // this.currentUser= dummyUser.currentUser
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUserProfile(id)
    next()
  },
  created() {
    const { id } = this.$route.params
    this.fetchUserProfile(id)
  }
}
</script>
