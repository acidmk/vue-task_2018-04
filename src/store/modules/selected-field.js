import Vue from 'vue'
import Vuex from 'vuex'
import md5 from 'md5'

Vue.use(Vuex)

const defaultState = {
  id: 1,
  typeId: 1,
  label: '',
  ref: '',
  defaultValue: '',
  reg: '',
  tagGroupId: null,
  tags: []
}

const state = Vue.util.extend({}, defaultState)

const mutations = {
  setType (state, id) {
    state.typeId = id
  },
  setTagGroup (state, id) {
    state.tagGroupId = state.tagGroupId !== id ? id : null
    state.tags = []
  },
  addTag (state, id) {
    const index = state.tags.indexOf(id)
    index !== -1 ? state.tags.splice(index, 1) : state.tags.push(id)
  },
  generateRegex (state) {
    if (state.label.length) {
      state.ref = md5(state.label + state.id + state.typeId)
    }
  },
  resetSelectedData (state) {
    Object.assign(state, defaultState)
  },
  setLabel (state, field) {
    state.label = field
  },
  setRef (state, value) {
    state.ref = value
  },
  setDefault (state, value) {
    state.defaultValue = value
  },
  setRegex (state, value) {
    state.reg = value
  }
}

const getters = {
  selectedFieldId: state => state.id,
  selectedFieldLabel: state => state.label,
  selectedFieldReference: state => state.ref,
  selectedFieldDefault: state => state.defaultValue,
  selectedFieldRegex: state => state.reg,
  selectedFieldTypeId: state => state.typeId,
  selectedFieldTagGroup: state => state.tagGroupId,
  selectedFieldTagIndexById: (state) => (id) => {
    return state.tags.indexOf(id) > -1
  }
}

const actions = {
  selectFieldType: ({
    commit
  }, id) => commit('setType', id),
  selectedFieldReset: ({
    commit
  }) => commit('resetSelectedData'),
  addTagToSelectedField: ({
    commit
  }, id) => commit('addTag', id),
  generateSelectedFieldRegex: ({
    commit
  }) => commit('generateRegex'),
  selectFieldTagGroup: ({
    commit
  }, id) => commit('setTagGroup', id),
  setSelectedFieldLabel: ({
    commit
  }, value) => commit('setLabel', value),
  setSelectedFieldReference: ({
    commit
  }, value) => commit('setRef', value),
  setSelectedFieldDefault: ({
    commit
  }, value) => commit('setDefault', value),
  setSelectedFieldRegex: ({
    commit
  }, value) => commit('setRegex', value)
}

export default {
  state,
  getters,
  actions,
  mutations
}
