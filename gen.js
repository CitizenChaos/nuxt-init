const fs = require('fs')
const shell = require('shelljs')
const consola = require('consola')
const _ = require('lodash')

let APP_NAME = 'foowwHomeMobile-test'
const PRODUCTION = 'production'

if (process.env.NODE_ENV_DEPLOY === PRODUCTION) {
  APP_NAME = 'foowwHomeMobile'
}

let NODE_ENV_DEPLOY = 'test'

if (process.env.NODE_ENV_DEPLOY === PRODUCTION) {
  NODE_ENV_DEPLOY = PRODUCTION
}

const DIST_DIR = `dist/${APP_NAME}`

consola.ready({ message: DIST_DIR, badge: true })

if (process.env.NODE_ENV_DEPLOY === PRODUCTION) {
  shell.exec('npm run build')
} else {
  shell.exec('npm run build-test')
}

shell.rm('-Rf', DIST_DIR)
consola.success(`delete dir ${DIST_DIR}`)

shell.mkdir('-p', DIST_DIR)

consola.success(`create dir ${DIST_DIR}`)

shell.cp('-R', '.nuxt', DIST_DIR)
consola.success(`copy dir .nuxt`)

shell.cp('-R', 'server', DIST_DIR)
consola.success(`copy dir server`)

shell.cp('-R', 'static', DIST_DIR)
consola.success(`copy dir static`)

shell.cp('nuxt.config.js', DIST_DIR)
consola.success(`copy nuxt.config.js`)

shell.cp('package.json', DIST_DIR)
consola.success(`copy package.json`)

shell.cp('package-lock.json', DIST_DIR)
consola.success(`copy package-lock.json`)

shell.cp('.npmrc', DIST_DIR)
consola.success(`copy .npmrc`)

/**
 * 生成pm2 ecosystem.yml
 */

const ecosystemTplString = fs.readFileSync('./ecosystem.template.yml')
const ecosystemTpl = _.template(ecosystemTplString)

let CONSOLA_LEVEL = 4
if (process.env.NODE_ENV_DEPLOY === PRODUCTION) {
  CONSOLA_LEVEL = 2
}

const ecosystemFile = ecosystemTpl({
  appName: APP_NAME,
  node_env: PRODUCTION,
  node_env_deploy: NODE_ENV_DEPLOY,
  consola_level: CONSOLA_LEVEL
})

fs.writeFileSync('ecosystem.yml', ecosystemFile)

shell.cp('ecosystem.yml', DIST_DIR)
consola.success(`copy ecosystem.yml`)

consola.success('gen success!!!')
