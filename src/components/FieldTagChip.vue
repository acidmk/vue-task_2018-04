<template>
  <div
    class="field-tag-chip"
    v-on:click="$emit('click')"
    :class="{ 'field-tag-chip--selected': selected }"
  >
    {{ item.name }}
  </div>
</template>

<script>
export default {
  props: [ 'item', 'selected' ]
}
</script>

<style lang="scss" scoped>
  .field-tag-chip {
    @include chip($chipStyle...);
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
  }
</style>
