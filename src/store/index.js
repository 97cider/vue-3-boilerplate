import { createStore } from 'vuex'
import theme from './modules/theme';
import locale from './modules/locale';

export default createStore({
    modules: {
        theme,
        locale
    }
})