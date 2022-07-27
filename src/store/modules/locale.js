const state = () => ({
    currentLocale: 'en'
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}