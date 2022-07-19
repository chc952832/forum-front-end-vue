import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

// axios.create()方法會回傳一個axios實例, 將它存入變數apiHelper中, 並export出去給其他vue檔案使用
export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,    // 要使用toast
  position: 'top-end',  // toast顯示的位置: 右上角
  showConfirmButton: false,  // 不顯示確認按鈕
  timer: 3000  // 停留3秒後消失
})