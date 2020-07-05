<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="filter">
        <span :class="{active: currentFilter === 'all'}" @click="handleClickFilterButton()">Все</span>
        <span :class="{active: currentFilter === 'inwork'}" @click="handleClickFilterButton('inwork')">Активные</span>
        <span :class="{active: currentFilter === 'expend'}" @click="handleClickFilterButton('expend')">Просроченные</span>
        <span :class="{active: currentFilter === 'done'}" @click="handleClickFilterButton('done')">Выполненные</span>
      </div>
      <div class="main__content">
        <div class="list-tasks">
          <p v-if="filteredTasks.length < 1">Задач пока нет</p>
          <Task v-else v-for="task in filteredTasks" :task="task"/>
<!--          <Task :ь время и дату jsstatus="'done'"/>-->
<!--          <Task :status="'expend'"/>-->
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
    data: () => ({
      allTasks: [],
      filteredTasks: [],
      currentFilter: 'all'
    }),
    async mounted() {
      await this.$store.dispatch('updateStatusTasks')
      this.allTasks = this.$store.getters.tasks
      this.filteredTasks = this.allTasks
    },
    components: {
      Task, ButtonAddTask
    },
    methods: {
      handleClickFilterButton(type='all') {
        if (type === 'expend') this.filteredTasks = this.allTasks.filter(value => value.status === 'expend')
        else if (type === 'done') this.filteredTasks = this.allTasks.filter(value => value.status === 'done')
        else if (type === 'inwork') this.filteredTasks = this.allTasks.filter(value => value.status === 'inwork')
        else this.filteredTasks = this.allTasks
        this.currentFilter = type
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/components/mixins.scss", '../assets/scss/components/vars';
  
  .main{
    background-color: $background_color;
    border-radius: 20px;
    position: relative;
    padding: 20px;
    @include grid(center, center);
  }
  .main__wrapper{
    max-width: 580px;
    min-width: 580px;
    //margin: 40px auto 0;
    display: grid;
    grid-row-gap: 20px;
  }
  .main__content{
    background-color: $main_color;
    border-radius: 8px;
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
    height: 600px;
    margin-bottom: 20px;
    padding: 0 20px 20px;
    overflow-y: auto;
    p{
      color: #fff;
      font-weight: bold;
      letter-spacing: .5px;
      font-size: 18px;
      text-align: center;
      padding-top: 20px;
    }
  }
</style>