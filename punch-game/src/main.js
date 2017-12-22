// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#vue-app',
  router,
  data: {
    restart: false,
    width: 200,
    styleObj: {width: this.width + 'px'}
  },
  methods: {
    punchBag: function () {
      this.width -= 20
      this.styleObj = {width: this.width + 'px'}
      if (this.width <= 0) {
        this.restart = true
      }
    },
    restartGame: function () {
      this.restart = false
      this.styleObj = {width: 200 + 'px'}
    }
  },
  template: '<App/>',
  components: { App }
})
