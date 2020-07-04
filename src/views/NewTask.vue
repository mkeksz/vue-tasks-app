<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="main__content">
        <form>
          <label>
            <input name="name" type="text">
          </label>
          <label>
            <textarea name="description"></textarea>
          </label>
          <label>
          
          </label>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "NewTask"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/components/mixins.scss", '../assets/scss/components/vars';
  
  .main{
    background-color: $background_color;
    border-radius: 20px;
    min-height: 800px;
    max-height: 800px;
    min-width: 700px;
    position: relative;
    @include grid(center, center);
  }
  .main__wrapper{
    min-width: 580px;
    max-width: 580px;
    //margin: 40px auto 0;
    display: grid;
    grid-row-gap: 20px;
  }
  .main__content{
    background-color: $main_color;
    border-radius: 8px;
    min-height: 680px;
    max-height: 680px;
    min-width: 580px;
    max-width: 580px;
    @include grid();
  }
</style>