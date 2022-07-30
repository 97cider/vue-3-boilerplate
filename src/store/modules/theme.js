const state = () => ({
    currentTheme: localStorage.theme !== undefined ? localStorage.theme : 'life'
})

const getters = {
    getTheme: () => {
        return state.currentTheme;
    }
}

const actions = {
    themeChange ({ commit }, theme)
    {
        commit('changeTheme', theme);
    }
}

const mutations = {
    changeTheme (state, theme)
    {
        state.currentTheme = theme;
        localStorage.theme = state.currentTheme;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}