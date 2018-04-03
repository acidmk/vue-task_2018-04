<template>
  <div id="app" class="app">
    <div class="app__header"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  .app {
    font-family: $font-stack;
    font-size: $font-size;
    line-height: $line-height;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0px;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    &__header {
      height: 50px;
      background-color: $primary-color
    }
  }
</style>
