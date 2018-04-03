import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  types: [
    {
      id: 1,
      name: 'Text',
      definition: 'String of text',
      defaultDisplay: 'Free-form text input'
    },
    {
      id: 2,
      name: 'Date',
      definition: 'Standard ISO format date',
      defaultDisplay: 'Datepicker, with configurable format'
    },
    {
      id: 3,
      name: 'VIN',
      definition: 'Vehicle identification number',
      defaultDisplay: 'Free-form text input'
    }
  ],
  filterValue: ''
}

const mutations = {
  setFilterValue (state, value) {
    state.filterValue = value
  }
}

const getters = {
  fieldTypes: state => state.types.filter((item) => {
    return item.name.toLowerCase().indexOf(state.filterValue.toLowerCase()) > -1
  }),
  filterValue: state => state.filterValue
}

const actions = {
  setFilterValue: ({
    commit
  }, value) => commit('setFilterValue', value)
}

export default {
  state,
  getters,
  actions,
  mutations
}
