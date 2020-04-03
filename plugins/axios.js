// 默认利用axios的cancelToken进行防重复提交。
import Vue from 'vue'
import axios from 'axios'

/* 创建axios实例 */
const service = axios.create({
  timeout: 30000 // 请求超时时间
})

/* request拦截器 */
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Vue.prototype.$toast('网络出错，请重试')
  }
)

/* respone拦截器 */
service.interceptors.response.use(
  (response) => {
    if (response.data.isok) {
      return response.data
    } else {
      const errorMessage =
        response.data.msg && response.data.msg.length
          ? response.data.msg
          : '网络出错，请重试'
      Vue.prototype.$toast(errorMessage)
    }
    return response.data
  },
  (error) => {
    Vue.prototype.$toast('网络出错，请重试')
  }
)

export default service
