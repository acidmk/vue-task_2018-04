<template>
  <div class="field-tags">
    <div class="field-tags__name">Tags</div>
    <div class="field-tags__content">
      <div class="field-tags__tag-group">
        <div>Tag group</div>
        <div>
          <FieldTagChip
            v-for="item in fieldTagGroups"
            :item="item"
            :key="item.id"
            v-on:click="selectFieldTagGroup(item.id)"
            :selected="selectedFieldTagGroup == item.id"
          />
        </div>
      </div>
      <div class="field-tags__tag-group">
        <div>Tags</div>
        <div class="field-tags__notice" v-if="!selectedFieldTagGroup">Select a tag group to see individual tags</div>
        <div v-if="selectedFieldTagGroup > 0">
          <FieldTagChip
            v-for="item in getTagsByGroupId(selectedFieldTagGroup)"
            :item="item"
            :key="item.id"
            v-on:click="addTagToSelectedField(item.id)"
            :selected="selectedFieldTagIndexById(item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FieldTagChip from './FieldTagChip'

export default {
  components: { FieldTagChip },
  computed: {
    ...mapGetters([
      'fieldTagGroups',
      'selectedFieldTagGroup',
      'getTagsByGroupId',
      'selectedFieldTagIndexById'
    ])
  },
  methods: {
    ...mapActions([
      'selectType',
      'selectFieldTagGroup',
      'addTagToSelectedField'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .field-tags {
    &__name {
      @include header($font-medium, normal)
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 0px;
    }

    &__tag-group {
      flex: 1;
      flex-basis: 300px;
    }

    &__notice {
      margin-top: 12px;
      font-style: italic;
    }
  }
</style>
