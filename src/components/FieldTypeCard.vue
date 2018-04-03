<template>
  <div
    class="field-type-card"
    v-on:click="$emit('click')"
    :class="{ 'field-type-card--selected': selected }"
  >
    <div class="field-type-card__name">{{ item.name }}</div>
    <div class="field-type-card__subtitle">Definition</div>
    <div>{{ item.definition }}</div>
    <div class="field-type-card__subtitle">Default display</div>
    <div>{{ item.defaultDisplay }}</div>
  </div>
</template>

<script>
export default {
  props: [ 'item', 'selected' ]
}
</script>

<style lang="scss" scoped>
  .field-type-card {
    @include chip($cardStyle...);
  }
</style>
