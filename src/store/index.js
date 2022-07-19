import { createStore } from 'vuex'
const theme = require('./modules/theme');

export default createStore({
    modules: {
        theme
    }
})