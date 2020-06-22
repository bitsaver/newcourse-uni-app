import Vue from 'vue'
import App from './App'
import request from './utils/request'

Vue.config.productionTip = false
Vue.prototype.request=request;
Vue.prototype.token=null;

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
