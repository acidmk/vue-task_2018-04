<template>
  <div
    class="field-group-card"
    v-on:click="$emit('click')"
    :class="{ 'field-group-card--selected': isSelected() }"
  >
    <div class="field-group-card__name">{{ item.name }}</div>
    <div class="field-group-card__subtitle">{{ inputCount }} other inputs</div>
  </div>
</template>

<script>
export default {
  props: [ 'item', 'field' ],
  methods: {
    isSelected () {
      return this.item.inputs.indexOf(this.field) !== -1
    }
  },
  computed: {
    inputCount () {
      let count = 0
      if (this.item) {
        const len = this.item.inputs.length
        count = this.isSelected() ? len - 1 : len
      }
      return count
    }
  }
}
</script>

<style lang="scss" scoped>
  .field-group-card {
    @include chip($cardStyle...);

    &__name {
      font-size: 1em;
    }
  }
</style>
