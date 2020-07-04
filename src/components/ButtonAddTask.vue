<template>
  <router-link to="/add" class="button-add-task">
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path d="M24 4C24 1.79086 25.7909 0 28 0C30.2091 0 32 1.79086 32 4V44C32 46.2091 30.2091 48 28 48C25.7909 48 24 46.2091 24 44V4Z" fill="white"/>
        <path d="M8 28C5.79086 28 4 26.2091 4 24C4 21.7909 5.79086 20 8 20H48C50.2091 20 52 21.7909 52 24C52 26.2091 50.2091 28 48 28H8Z" fill="white"/>
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
    name: "ButtonAddTask"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/components/mixins.scss", '../assets/scss/components/vars';
  
  .button-add-task{
    position: absolute;
    right: 20px;
    bottom: 20px;
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