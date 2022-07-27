import createStore from './store'
import { router } from './router'
import { createApp } from 'vue'
// import messages from './locales'
import { i18n } from './locales';

const App =  require('./app.vue').default
const app = createApp(App);
const store = createStore;

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');