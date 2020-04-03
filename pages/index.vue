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
        <nuxt-link
          to="/about"
          class="button--grey"
        >
          about页面
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { getArticleGroups } from '@/api/api'

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
  }
  // async created() {
  //   const res = await getArticleGroups()
  //   console.log(res)

  // }
}
</script>

<style>
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
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
