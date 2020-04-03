import request from '@/plugins/axios'

// 处理url
const handleUrl = (url) => {
  if (process.client) {
    return `/cmsapi${url}`
  } else if (process.server) {
    return `https://cmstest.fooww.com${url}`
  }
}

export function getArticleGroups() {
  return request({
    url: handleUrl('/official/getArticleGroups'),
    method: 'GET',
    params: {}
  })
}
