<template>
  <div class="b">
    <div class="b__wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Emptylayout",
    async mounted() {
      if (this.$store.getters.tasks.length < 1) await this.$store.dispatch('getTasks')
    }
  }
</script>