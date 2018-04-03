<template>
  <div class="text-input">
      <div class="text-input__title">{{ title }}</div>
      <input
        type="text"
        :value="value"
        v-on:input="onInputChange"
        v-on:blur="$emit('blur')"
        :required="required ? true : false"
        :pattern="regex ? regex : '(.*?)'"
      />
      <div class="text-input__description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'type',
    'value',
    'description',
    'required',
    'regex'
  ],
  methods: {
    onInputChange (ev) {
      let el = ev.currentTarget
      if (this.type === 'regex') {
        try {
          RegExp(ev.target.value)
          el.setCustomValidity('')
        } catch (e) {
          el.setCustomValidity('Invalid regular expression string')
        }
      }
      this.$emit('input', ev.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-input {
    & input {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid $border-input;
      border-radius: 4px;
      box-sizing: border-box;
    }

    &__description {
      color: $font-primary;
      font-size: $font-small;
    }
  }
</style>
