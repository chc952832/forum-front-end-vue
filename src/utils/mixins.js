// 載入moment套件(幫忙進行複雜的時間計算)
import moment from 'moment'

export const fromNowFilter = {
  filters: {
    // 計算建立日期距今多久
    fromNow(datetime) {
      // 使用 moment 提供的 fromNow 方法
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}