<template>
  <div class="field-groups">
    <div class="field-groups__title">Field Groups</div>
    <div class="field-groups__subtitle">Choose a group for this input</div>
    <div class="field-groups__list">
      <FieldGroupCard
        v-for="item in fieldGroups"
        :item="item"
        :key="item.id"
        v-on:click="addFieldToGroup(item.id, selectedFieldId )"
        :field="selectedFieldId"
      />
    </div>
    <Button
      label="Add A New Group"
      v-on:click="addGroup"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FieldGroupCard from './FieldGroupCard'
import Button from './Button'

export default {
  components: { FieldGroupCard, Button },
  computed: {
    ...mapGetters([
      'fieldGroups',
      'selectedFieldId'
    ])
  },
  methods: {
    addFieldToGroup (group, field) {
      this.$store.dispatch('addFieldToGroup', { group, field })
    },
    ...mapActions([
      'addGroup'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .field-groups {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: $background-light;
    padding: 12px;
    @include border($border-light);

    &__title {
      @include header($font-medium);
    }

    &__subtitle {
      font-size: $font-small;
      color: $font-primary;
    }

    &__list {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
