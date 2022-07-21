import { apiHelper } from './../utils/helper'

export default {
  delete({commentId}) {
    return apiHelper.delete(`/comments/${commentId}`)
  },
  create({restaurantId, text}) {
    return apiHelper.post('/comments', { restaurantId, text })
  }
}