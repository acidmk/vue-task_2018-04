import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  groups: [
    {
      id: 1,
      name: 'Rental Vehicle Coverage Package',
      inputs: [1, 2, 3, 4, 5]
    },
    {
      id: 2,
      name: 'Additional Packages',
      inputs: []
    }
  ]
}

const mutations = {
  add (state, group) {
    state.groups.push(group)
  },
  addField (state, payload) {
    let group = state.groups.find(o => o.id === payload.group)
    const fieldIndex = group.inputs.indexOf(payload.field)

    if (fieldIndex !== -1) {
      group.inputs.splice(fieldIndex, 1)
    } else if (payload.field > 0) {
      group.inputs.push(payload.field)
    }
  }
}

const getters = {
  fieldGroups: state => state.groups
}

const actions = {
  addFieldToGroup: ({
    commit
  }, payload) => commit('addField', payload),
  addGroup: ({
    commit, state
  }) => {
    const name = prompt('Please enter group name', 'New group')

    if (name !== null && name !== '') {
      const group = {
        id: state.groups.length + 1,
        name,
        inputs: []
      }
      commit('add', group)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
