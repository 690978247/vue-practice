import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagsView: {
      visitedViews: [],
      cachedViews: []
    },
    sideBar: {
      opened: false
    }
  },
  mutations: {
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
      state.tagsView.cachedViews.push(view.name)
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
