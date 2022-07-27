import createStore from './store'
import { router } from './router'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './locales'

const App =  require('./app.vue').default
const app = createApp(App);
const store = createStore;
const i18n = new createI18n({
    locale: 'en-US ',
    fallbackLocale: 'en-US',
    legacy: false,
    globalInjection: true,
    allowComposition: true,
    messages: messages
})

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');