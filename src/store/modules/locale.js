import { loadLanguageAsync } from '../../locales';

const state = () => ({
    currentLocale: localStorage.locale !== undefined ? localStorage.locale : 'en'
})

const getters = {
    getLocale: () => {
        return state.currentLocale;
    }
}

const actions = {
    localeChange ({ commit }, locale)
    {
        commit('changeLocale', locale);
    }
}

const mutations = {
    changeLocale (state, locale)
    {
        state.currentLocale = locale;
        localStorage.locale = state.currentLocale;
        loadLanguageAsync(localStorage.locale);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}