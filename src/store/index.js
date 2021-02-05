import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    token: getToken(),
  }
}


export default new Vuex.Store({
  state: {
    token: getToken(),
    tagsView: {
      visitedViews: [],
      cachedViews: []
    },
    sideBar: {
      opened: false
    }
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    RESET_STATE: (state => {
      Object.assign(state, getDefaultState())
    }),
    ADD_VISITED_VIEW (state, view) {
      if (state.tagsView.visitedViews.some(v => v.path === view.path)) return
      state.tagsView.visitedViews.push({
        path: view.path,
        meta: view.meta,
        fullPath: view.fullPath
      })
    },
    DEL_VISITED_VIEW (state, view) {
      for (const [i, v ] of state.tagsView.visitedViews.entries()) {
        if (v.path === view.path) {
          state.tagsView.visitedViews.splice(i, 1)
          break
        }
      }
    },
    ADD_CACHED_VIEW (state, view) {
      if (state.tagsView.cachedViews.includes(view.name)) return 
      if (!view.meta.noCache) {
        state.tagsView.cachedViews.push(view.name)
      }
    },
    TOGGLE_SIDEBAR (state) {
      state.sideBar.opened = !state.sideBar.opened 
    },
    SHOW_SIDEBAR (state) {
      state.sideBar.opened = true
    },
    HIDE_SIDEBAR (state) {
      state.sideBar.opened = false
    }
  },
  actions: {
     // user login
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({username: username.trim(), password}).then(res => {
          const { data } = res
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

     // remove token
    resetToken({ commit }) {
      return new Promise(resolve => {
        removeToken() // must remove  token  first
        commit('RESET_STATE')
        resolve()
      })
    },
    addView ({ dispatch }, view) {
      dispatch('addVisitedView', view)
      dispatch('addCachedView', view)
    },
    delView ({ dispatch, state }, view) {
      return new Promise (resolve => {
        dispatch('delVisitedView', view)
        resolve([...state.tagsView.visitedViews])
      })
    },
    addVisitedView({ commit }, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    addCachedView({ commit }, view) {
      commit('ADD_CACHED_VIEW', view)
    },
    delVisitedView({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_VISITED_VIEW', view)
        resolve([...state.tagsView.visitedViews])
      })
    },
    toggleSidebar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    showSidebar ({ commit }) {
      commit('SHOW_SIDEBAR')
    },
    hideSidebar ({ commit }) {
      commit('HIDE_SIDEBAR')
    }
  },
  modules: {
  }
})
