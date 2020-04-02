// 默认利用axios的cancelToken进行防重复提交。
import axios from 'axios'

/* 创建axios实例 */
const service = axios.create({
  timeout: 5000 // 请求超时时间
})

/* request拦截器 */
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {}
)

/* respone拦截器 */
service.interceptors.response.use(
  (response) => {
    if (response.data.isok) {
      return response.data
    } else {
    }
    return response.data
  },
  (error) => {}
)

export default service
