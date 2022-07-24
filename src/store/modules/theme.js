const state = () => ({
    currentTheme: 'life'
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}