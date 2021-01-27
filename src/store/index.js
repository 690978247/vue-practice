import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagsView: {
      visitedViews: [],
      cachedViews: []
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
    ADD_CACHED_VIEW (state, view) {
      state.tagsView.cachedViews.push(view.name)
    }
  },
  actions: {
    addView ({ dispatch }, view) {
      dispatch('addVisitedView', view)
      dispatch('addCachedView', view)
    },
    addVisitedView({ commit }, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    addCachedView({ commit }, view) {
      commit('ADD_CACHED_VIEW', view)
    },
  },
  modules: {
  }
})
