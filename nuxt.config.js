module.exports = {
  mode: 'universal',
  server: {
    port: process.env.NODE_ENV_DEPLOY === 'production' ? 3300 : 3200
  },
  env: {
    node_env_deploy: process.env.NODE_ENV_DEPLOY
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '@/assets/global.css' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/assets/rem.js', ssr: false },
    { src: '@/plugins/vant.js', ssr: true }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    // '@nuxtjs/dotenv',
    '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},

    // 添加这个是关键，添加后babel才会处理依赖包vant里面的代码
    transpile: [/vant.*?less/],

    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            style: (name) => {
              return `${name}/style/less.js`
            }
          },
          'vant'
        ]
      ]
    }
  },
  // 请求代理
  proxy: [
    [
      '/cmsapi',
      {
        target: 'https://cmstest.fooww.com',
        secure: false,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/cmsapi': '/'
        }
      }
    ]
  ]
}
