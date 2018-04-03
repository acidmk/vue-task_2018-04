<template>
  <input
    :type="buttonType"
    :class="buttonClass"
    v-on:click="$emit('click')"
    :value="label"
  />
</template>

<script>
export default {
  props: [ 'label', 'color', 'submit' ],
  computed: {
    buttonType () {
      return this.submit ? 'submit' : 'button'
    },
    buttonClass () {
      return this.color ? `btn-${this.color}` : 'btn'
    }
  }
}
</script>

<style lang="scss" scoped>
  %btn {
    background-color: $background;
    border: 1px solid $border-input;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
  }
  .btn-green {
    @extend %btn;
    background-color: #018aa2;
    border-color: #19899d;
    color: #fff;
  }
  .btn-red {
    @extend %btn;
    background-color: #a72a2a;
    border-color: #591616;
    color: #fff;
  }
</style>
