import { apiHelper } from './../utils/helper'

export default {
  update({userId, formData}) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  getCurrentUser() {
    return apiHelper.get('/get_current_user')
  },
  get({userId}) {
    return apiHelper.get(`/users/${userId}`)
  },
  addFavorite({ restaurantId }) {
    // * .post第二個參數要帶入data(也就是要發送的資料), 若沒有則寫null
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  addFollowing({userId}) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  }
}