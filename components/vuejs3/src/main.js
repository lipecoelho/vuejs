import { createApp } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Contador from './components/Contador.vue'
import App from './App.vue'

const app = createApp(App)

app.component('HelloWorld', HelloWorld)
app.component('Contador', Contador)

app.mount('#app')
