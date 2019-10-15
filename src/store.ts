import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // We use persistedState to save values with reload browser.
  plugins: [
    persistedState()
  ],
  state: {
    activities: Array(),
    activity: {},
    type: 'educational',
    participants: 0,
    budget: true
  },
  mutations: {
    SET_ACTIVITY (state, activity) {
      state.activity = activity
    },
    SET_FILTER (state, { type, participants, budget }) {
      state.type = type
      state.participants = participants
      state.budget = budget
    },
    ADD_ACTIVITY (state) {
      const activities = Array()
      activities.push(state.activity)
      state.activities = activities.concat(state.activities)
    },
    REMOVE_ACTIVITIES (state) {
      state.activities = Array()
    },
    REMOVE_ACTIVITY (state, { activity }) {
      state.activities = state.activities.filter(item => item.activity != activity)
    },
  },
  actions: {
    async getActivity({ commit }) {
      // Track time to get information about performance.
      console.time('getActivity')
      axios.get('https://www.boredapi.com/api/activity').then((response) => {
        // Add some info about budget
        if (response.data.price >= 0.5) {
          response.data.budget = 'expensive'
        }
        else {
          response.data.budget = 'cheap'
        }
        commit('SET_ACTIVITY', response.data)
      })

      console.timeEnd('getActivity')
    },
    async getNewActivity({ commit }, { type, participants, budget }) {
      // Track time to get information about performance.
      console.time('getNewActivity')

      commit('SET_FILTER', { type, participants, budget })
      let url = 'https://www.boredapi.com/api/activity?type=' + type + '&participants=' + participants + '&budget=' + (budget * 0.1)
      console.log(url)
      axios.get(url).then((response) => {
        // Add some info about budget
        if (response.data.price >= 0.5) {
          response.data.budget = 'expensive'
        }
        else {
          response.data.budget = 'cheap'
        }
        commit('SET_ACTIVITY', response.data)
      })

      console.timeEnd('getNewActivity')
    },
    async saveActivity({ commit }) {
      // Track time to get information about performance.
      console.time('saveActivity')
      commit('ADD_ACTIVITY')
      console.timeEnd('saveActivity')
    },
    async clearActivities({ commit }) {
      // Track time to get information about performance.
      console.time('clearActivities')
      commit('REMOVE_ACTIVITIES')
      console.timeEnd('clearActivities')
    },
    async deleteActivity({ commit }, { activity }) {
      // Track time to get information about performance.
      console.time('removeActivity')
      commit('REMOVE_ACTIVITY', activity)
      console.timeEnd('removeActivity')
    }
  }
})
