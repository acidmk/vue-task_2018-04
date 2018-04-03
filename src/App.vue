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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0px;
    font-size: $font-size;
    line-height: 24px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &__header {
      height: 50px;
      background-color: $primary-color
    }
  }
</style>
