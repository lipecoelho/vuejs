import { createApp } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Contadores from './components/Contadores.vue'
import App from './App.vue'

const app = createApp(App)

app.component('HelloWorld', HelloWorld)
app.component('Contadores', Contadores)

app.mount('#app')
