import request from '@/plugins/axios'

// 处理url
const handleUrl = (url) => {
  if (process.client) {
    // 客户端，加代理
    return `/daili${url}`
  } else if (process.server) {
    // 服务端，全连接
    return `https://cmstest.fooww.com${url}`
  }
}

export function getBanner() {
  return request({
    url: handleUrl('/official/getArticleGroups'),
    method: 'GET',
    params: {}
  })
}
