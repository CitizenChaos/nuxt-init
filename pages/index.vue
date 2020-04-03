<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        fooww-home-mobile
      </h1>
      <h2 class="subtitle">
        My peachy Nuxt.js project
      </h2>
      <div class="links">
        <van-button type="primary" class="btn" @click="goToAbout">About页面</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { getArticleGroups } from '@/api/api'
import { Toast } from 'vant'

export default {
  components: {
    Logo
  },
  data() {
    return {
      res: []
    }
  },
  async asyncData(context) {
    const res = await getArticleGroups()
    console.log('1111', res)
    return {
      res: res.data
    }
  },
  methods: {
    goToAbout() {
      this.$router.push('/about')
    }
  },
  created() {
    
  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 0.42rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 0.15rem;
}

.links {
  padding-top: 0.15rem;
  .btn {
    width: 2rem;
    height: 1rem;
    font-size: 0.15rem;
    line-height: 1rem;
    padding: 0;
  }

}

</style>
