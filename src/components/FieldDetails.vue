<template>
  <div class="field-details">
      <div class="field-details__title">Field Details</div>
      <div class="field-details__row">
        <div class="field-details__form-container">
          <FieldDetailsForm />
          <FieldTags />
        </div>
        <div class="field-details__groups-container">
          <FieldGroups />
        </div>
      </div>
  </div>
</template>

<script>
import FieldDetailsForm from './FieldDetailsForm'
import FieldTags from './FieldTags'
import FieldGroups from './FieldGroups'

export default {
  components: { FieldDetailsForm, FieldTags, FieldGroups }
}
</script>

<style lang="scss" scoped>
  .field-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
    padding-bottom: 20px;
    overflow-y: auto;

    &__groups-container {
      flex: 0;
      flex-basis: 300px;
      display: flex;
    }

    &__form-container {
      flex: 1;
    }

    &__row {
      display: flex;
      flex: 1;
    }

    &__title {
      font-size: $font-big;
      margin: $header-margin;
      font-weight: bold;
    }
  }
</style>
