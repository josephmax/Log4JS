// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import customizeConsole from './util/customizeConsole'
import config from '../config'

Vue.config.productionTip = false

const lv = (process.env.NODE_ENV === 'production' ? config.build.logLv : config.dev.logLv)
customizeConsole(lv)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
