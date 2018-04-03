<template>
  <div class="details-form">
    <div class="details-form__row-group">
      <div class="details-form__input-holder">
        <TextInput
          title="Display Label"
          description="For display purposes, spaces allowed"
          v-model="label"
          v-on:blur="handleLabelBlur"
          :required="true"
        />
      </div>
      <div class="details-form__input-holder">
        <TextInput
          title="Reference Name"
          description="Used to reference in calculations, no spaces allowed"
          v-model="reference"
          :required="true"
          regex="[^\s]+"
        />
      </div>
    </div>
    <div class="details-form__row-group">
      <div class="details-form__input-holder">
        <TextInput
          title="Default Value"
          v-model="defaultValue"
          :required="true"
          :regex="regexValue"
        />
      </div>
      <div class="details-form__input-holder" />
    </div>
    <div class="details-form__row-group">
      <div class="details-form__input-holder">
        <TextInput
          title="Custom Validation"
          type="regex"
          description="Any regex pattern can be used for custom input validation"
          v-model="regexValue"
          :required="true"
        />
      </div>
      <div class="details-form__input-holder" />
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput'

export default {
  components: { TextInput },
  methods: {
    handleLabelBlur () {
      this.$store.dispatch('generateSelectedFieldRegex')
    }
  },
  computed: {
    label: {
      get () {
        return this.$store.getters.selectedFieldLabel
      },
      set (value) {
        this.$store.dispatch('setSelectedFieldLabel', value)
      }
    },
    reference: {
      get () {
        return this.$store.getters.selectedFieldReference
      },
      set (value) {
        this.$store.dispatch('setSelectedFieldReference', value)
      }
    },
    defaultValue: {
      get () {
        return this.$store.getters.selectedFieldDefault
      },
      set (value) {
        this.$store.dispatch('setSelectedFieldDefault', value)
      }
    },
    regexValue: {
      get () {
        return this.$store.getters.selectedFieldRegex
      },
      set (value) {
        this.$store.dispatch('setSelectedFieldRegex', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .details-form {
    display: flex;
    flex-direction: column;

    &__row-group {
      display: flex;
      flex-wrap: wrap;
    }

    &__input-holder {
      flex: 1;
      flex-basis: 328px;
      margin-right: 20px;
      margin-bottom: 25px;
    }
  }
</style>
