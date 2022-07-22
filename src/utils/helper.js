import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://forum-express-api.herokuapp.com/api'

// axios.create()方法會回傳一個axios實例, 將它存入變數apiHelper中, 並export出去給其他vue檔案使用
const axiosInstance = axios.create({
  baseURL
})
//透過 interceptors的使用，可以讓 axios在當使用者有登入（有 token）的情況下，把所有發出去的請求都添加上 Authorization 的標頭
axiosInstance.interceptors.request.use(config=> {
  // 從 localStorage 將 token 取出
  const token = localStorage.getItem('token')
  // 如果 token 存在的話，則帶入到 headers 當中
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, err => Promise.reject(err))
export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,    // 要使用toast
  position: 'top-end',  // toast顯示的位置: 右上角
  showConfirmButton: false,  // 不顯示確認按鈕
  timer: 3000  // 停留3秒後消失
})