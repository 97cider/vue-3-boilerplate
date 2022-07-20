const App =  require('./app.vue').default

import { router } from './router'
import { createApp } from 'vue'
import createStore from './store'


const app = createApp(App);
const store = createStore;

app.use(router);
app.use(store);

app.mount('#app');