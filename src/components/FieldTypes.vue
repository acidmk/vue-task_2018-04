<template>
  <div class="field-types">
    <div class="field-types__title">Field Types</div>
    <div class="field-types__filter">
      <TextInput
        title="Filter types"
        v-model="filterValue"
      />
    </div>
    <div class="field-types__content">
      <FieldTypeCard
        v-for="item in fieldTypes"
        :item="item"
        :key="item.id"
        v-on:click="selectFieldType(item.id)"
        :selected="selectedFieldTypeId == item.id"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TextInput from './TextInput'
import FieldTypeCard from './FieldTypeCard'

export default {
  components: { TextInput, FieldTypeCard },
  computed: {
    filterValue: {
      get () {
        return this.$store.getters.filterValue
      },
      set (value) {
        this.$store.dispatch('setFilterValue', value)
      }
    },
    ...mapGetters([
      'fieldTypes',
      'selectedFieldTypeId'
    ])
  },
  methods: {
    selectFieldType (id) {
      this.$store.dispatch('selectFieldType', id)
    },
    ...mapActions([
      'selectType'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .field-types {
    flex: 0;
    flex-basis: 300px;
    background-color: $background-light;
    padding: 0px 30px;
    overflow-y: auto;
    min-width: 200px;

    &__title {
      @include header($font-big);
    }
  }
</style>
