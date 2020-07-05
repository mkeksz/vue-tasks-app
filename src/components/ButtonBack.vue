<template>
  <router-link to="/" class="button-add-task">
    <svg width="48" height="54" viewBox="0 0 48 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path d="M4.87868 20.8787C3.70711 22.0503 3.70711 23.9497 4.87868 25.1213L23.9706 44.2132C25.1421 45.3848 27.0416 45.3848 28.2132 44.2132C29.3848 43.0416 29.3848 41.1421 28.2132 39.9706L11.2426 23L28.2132 6.02944C29.3848 4.85786 29.3848 2.95837 28.2132 1.7868C27.0416 0.615223 25.1421 0.615223 23.9706 1.7868L4.87868 20.8787ZM44 20L7 20V26L44 26V20Z" fill="white"/>
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0.908112" width="48" height="52.1838" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>

  </router-link>
</template>

<script>
  export default {
    name: "ButtonAddTask",
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/components/mixins.scss", '../assets/scss/components/vars';
  
  .button-add-task{
    position: absolute;
    left: 20px;
    top: 20px;
    background: $main_color;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    border-radius: 50%;
    @include grid(center, center);
    width: 80px;
    height: 80px;
    transition: .2s;
    cursor: pointer;
    >svg{
      margin-top: 10px;
    }
  }
  .button-add-task:hover{
    opacity: .8;
  }
</style>