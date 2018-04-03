import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tagGroups: [
    {
      id: 1,
      name: 'Vinmaster',
      tags: [
        {
          id: 4,
          name: 'make'
        },
        {
          id: 5,
          name: 'model'
        },
        {
          id: 6,
          name: 'year'
        }
      ]
    },
    {
      id: 2,
      name: 'ISO',
      tags: [
        {
          id: 7,
          name: 'factors'
        },
        {
          id: 8,
          name: 'criteria'
        },
        {
          id: 9,
          name: 'metrics'
        }
      ]
    },
    {
      id: 3,
      name: 'Tag 3',
      tags: [
        {
          id: 10,
          name: 'test'
        }
      ]
    }
  ]
}

const mutations = {

}

const getters = {
  fieldTagGroups: state => state.tagGroups,
  getTagsByGroupId: (state) => (id) => {
    return state.tagGroups.find(group => group.id === id).tags
  }
}

const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
