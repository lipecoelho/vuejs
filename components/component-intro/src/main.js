import Vue from 'vue'
import App from './App.vue'
import Contador from './components/Contador.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.component('app-contador', Contador)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
