import { apiHelper} from './../utils/helper'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    // 利用JS原生方法來組成queryString; URLSearchParams是物件建構子, 需new出實例來使用
    const searchParams = new URLSearchParams({ page, categoryId})
    // 這邊return出來的會是一個Promise
    // 放入的第二個參數是request設定，這些設定需要打包成一個物件。在這個物件裡，需要放在 HTTP Header 裡的設定
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      // 前面加Bearer是JWT的規範
      headers: { Authorization : `Bearer ${getToken()}`}
    })
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTop() {
    return apiHelper.get('restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}