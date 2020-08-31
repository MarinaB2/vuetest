import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Hello from './components/Hello.vue'
import World from './components/World.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/Hello', component: Hello},
  { path: '/World', component: World}
]

const router = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
