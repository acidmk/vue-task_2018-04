<template>
  <form class="field-page" @submit.prevent="handleSubmit">
    <div class="field-page__header">Commercial Property - Add Field</div>
    <div class="field-page__content">
      <FieldTypes />
      <div class="field-page__details">
        <FieldDetails />
      </div>
    </div>
    <div class="field-page__footer">
      <div class="field-page__btn-save">
        <Button
          label="Save Changes"
          color="green"
          submit="true"
        />
      </div>
      <div class="field-page__btn-cancel">
        <Button
          label="Cancel Changes"
          v-on:click="handleCancel"
        />
      </div>
      <Button
        label="Delete Input"
        color="red"
        v-on:click="handleDelete"
      />
    </div>
  </form>
</template>

<script>
import FieldTypes from './FieldTypes'
import FieldDetails from './FieldDetails'
import Button from './Button'

export default {
  components: {
    FieldTypes,
    FieldDetails,
    Button
  },
  methods: {
    handleCancel () {
      this.$store.dispatch('selectedFieldReset')
    },
    handleDelete () {
      alert('No way. Stay and fight!')
    },
    handleSubmit (ev) {

    }
  }
}
</script>

<style lang="scss" scoped>
  .field-page {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0px 55px;

    &__header {
      font-size: $font-large;
      margin: $header-margin;
    }

    &__content {
      flex: 1;
      display: flex;
      border: 1px solid $border-primary;
      border-radius: 3px;
      min-width: 620px;
    }

    &__details {
      flex: 1;
      display: flex;
    }

    &__footer {
      display: flex;
      align-items: center;
      height: 100px;
    }

    &__btn-save {
      flex: 1;
      margin-right: 45px;
    }

    &__btn-cancel {
      margin-right: 45px;
    }
  }
</style>
