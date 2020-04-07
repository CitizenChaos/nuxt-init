# FoowwHome

> 新官网手机端项目，使用 Nuxt.js ssr 框架

## Build Setup

```bash
# install dependencies
npm run install

# serve with hot reload at localhost:3000
npm run dev

# build for production and launch server
npm run build
npm run start

# generate static project
npm run generate
```

### 发布部署

step 0. 说明

使用自定义变量 `process.env.NODE_ENV_DEPLOY` 区分发布的生产和测试环境

[webpack mode](https://webpack.js.org/configuration/mode/)
Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.

取值如下:

string = 'production': 'none' | 'development' | 'production'

> 值不够用，比如测试环境

step 1. 生成发布 artifact

```bash
# test-m.fan-xun.com/
npm run gen-test

# m.fan-xun.com/
npm run gen
```

step 2. 通过 xshell 复制到相应目录下

如：

> /usr/local/node_app/foowwhomemobile-test

step 3. ecosystem.yml 所在根目录

```bash
cd /usr/local/node_app/foowwHomeMobile-test
# 首次运行
pm2 start ecosystem.yml
# 开机启动
pm2 save


# 以后每次发布后，直接运行
pm2 restart ecosystem.yml
```

step 4: 查看日志

```bash
tail -n 100 -f logs/foowwHomeMobile-test.log
```

### 服务端渲染应用部署

> 第一步：
> npm run build
> 在本地 npm run build,会在.nuxt 文件夹下生成 dist 文件

> 第二步：
> 把本地文件的.nuxt,static,package.json,nuxt.config.js,这四个文件夹放到服务器目录文件下

> 第三步：
> package.json,当"start": "cross-env NODE_ENV=production node server/index.js",时需要把它更改为："start": "nuxt start"

> 第四步：
> 下载依赖 npm i

```txt
注：
目录1（.nuxt）、这是打包构建好的所有依赖文件及源文件等等

目录2（static）、就是静态资源包，因为上面打包构建时，不会被打进去的，所以得带上它

目录3（nuxt.config.js）、一些配置文件，得带上。

目录4（package.json）、这就比较重要了,当"start": "cross-env NODE_ENV=production node server/index.js",时需要把它更改为："start": "nuxt start" 。
```
