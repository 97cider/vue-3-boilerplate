const App =  require('./app.vue').default

import { router } from './router'
import { createApp } from 'vue'


const app = createApp(App);

app.use(router);

app.mount('#app');