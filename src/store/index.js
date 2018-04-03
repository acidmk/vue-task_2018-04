
import Vue from 'vue'
import Vuex from 'vuex'
import fieldTypes from './modules/field-types'
import fieldGroups from './modules/field-groups'
import fieldTags from './modules/field-tags'
import selectedField from './modules/selected-field'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    fieldTypes,
    fieldGroups,
    fieldTags,
    selectedField
  },
  strict: debug
})
