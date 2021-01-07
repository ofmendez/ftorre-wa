
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import store from './store'
import Axios from "axios";

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
