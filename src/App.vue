<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import EmptyLayout from '@/layouts/EmptyLayout.vue'
  
  export default {
    computed: {
      layout() {
        return this.$route.meta.layout || 'EmptyLayout'
      }
    },
    components: {
      EmptyLayout
    },
  }
</script>

<style lang="scss">
  @import './assets/scss/index';
</style>
