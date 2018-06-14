import Vue from "vue"
import App from "./App.vue"

import "bootstrap/dist/css/bootstrap.css"

import router from "./routes/router.js"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
