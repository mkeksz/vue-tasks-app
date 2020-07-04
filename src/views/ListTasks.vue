<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="filter">
        <span class="active">Все</span>
        <span>Активные</span>
        <span>Просроченные</span>
        <span>Выполненные</span>
      </div>
      <div class="main__content">
        <div class="list-tasks">
          <Task/>
          <Task :status="'done'"/>
          <Task :status="'expend'"/>
        </div>
      </div>
    </div>
    <button-add-task/>
  </main>
</template>

<script>
  import Task from '@/components/Task'
  import ButtonAddTask from "@/components/ButtonAddTask";
  
  export default {
    name: "ListTasks",
    components: {
      Task, ButtonAddTask
    }
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

  .filter{
    background-color: $main_color;
    min-height: 54px;
    border-radius: 8px;
    @include grid();
    grid-template-columns: repeat(4, 1fr);
    >span{
      cursor: pointer;
      font-weight: bold;
      font-size: 12px;
      color: #fff;
      display: block;
      width: 100%;
      height: 100%;
      @include grid(center, center);
      transition: .2s;
    }
    >span:hover{
      opacity: .5;
    }
    >span.active{
      opacity: .5;
    }
  }
  
  .list-tasks{
    height: 660px;
    padding: 0 20px 20px;
    overflow-y: auto;
  }
</style>