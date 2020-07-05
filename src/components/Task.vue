<template>
  <div class="task" :class="{inwork: task.status === 'inwork', done: task.status === 'done',
                             expend: task.status === 'expend'}">
    <div class="task__checkbox">
      <div @click="handlerClickCheckbox">
        <svg width="21" height="19" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6627 1.73205C17.1953 0.775466 18.3747 0.447715 19.2972 1C20.2196 1.55228 20.5356 2.77547 20.0031 3.73205L12.2287 17.6964C11.6962 18.6529 10.5167 18.9807 9.59425 18.4284C8.67182 17.8761 8.35578 16.6529 8.88834 15.6964L16.6627 1.73205Z"/>
          <path d="M1.77735 13.7459C0.85493 13.1936 0.538886 11.9704 1.07145 11.0138C1.60401 10.0572 2.7835 9.72947 3.70592 10.2818L10.8283 14.5461C11.7507 15.0984 12.0667 16.3216 11.5342 17.2782C11.0016 18.2348 9.82212 18.5625 8.8997 18.0102L1.77735 13.7459Z"/>
        </svg>
      </div>
    </div>
    <router-link :to="`/task/${task.id}`" class="task__content">
      <div class="task__title">
        <h4>{{task.title}}</h4>
        <div>
          <p class="deadline">Дедлайн: <span>{{task.date | date('date')}} {{task.time}}</span></p>
          <p class="done">Выполнено</p>
          <p class="expend">Просрочено</p>
        </div>
      </div>
      <div class="task__desc">
        <p>
          {{task.description}}
        </p>
      </div>
      <div class="task__tags">
        <p>
          <span v-for="tag in task.tags">#{{tag}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      task: {
        required: true,
        type: Object
      }
    },
    data: () => ({
      lastStatus: 'inwork'
    }),
    mounted() {
      this.lastStatus = this.task.status
    },
    methods: {
      handlerClickCheckbox() {
        if (this.task.status !== 'done') this.task.status = 'done'
        else this.task.status = 'inwork'
        this.$store.dispatch('editTask', this.task)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/components/mixins.scss";
  
  .task{
    margin-top: 20px;
    background: #6DB8E9;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .1);
    border-radius: 8px;
    @include grid();
    grid-template-columns: 1fr 6fr;
    transition: .2s;
  }
  .task:hover{
    opacity: .7;
  }
  .task.done{
    .task__checkbox{
      >div{
        border: 2px solid #74E8A2;
        path{
          fill: #74E8A2;
        }
      }
    }
    .task__title{
      h4{
        text-decoration: line-through;
        opacity: .6;
      }
      p.deadline{
        display: none;
      }
      p.done{
        display: inline;
      }
    }
    .task__desc{
      >p{
        opacity: .6;
        text-decoration: line-through;
      }
    }
  }
  .task.expend{
    .task__checkbox{
      >div{
        border: 2px solid #E48E8E;
      }
    }
    .task__title{
      p.deadline{
        display: none;
      }
      p.expend{
        display: inline;
      }
    }
  }
  
  .task__checkbox{
    user-select: none;
    @include grid(center, center);
    padding: 20px;
    >div{
      cursor: pointer;
      @include grid(center, center);
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 8px;
      border: 2px solid #fff;
      transition: .2s;
      path{
        fill: #fff;
        transition: .2s;
      }
    }
  }
  
  .task__content{
    padding: 10px 0;
    display: block;
  }
  .task__title{
    @include grid();
    grid-template-columns: auto 170px;
    color: #fff;
    >div{
      text-align: right;
      padding-right: 10px;
    }
    h4{
      font-weight: bold;
      font-size: 18px;
    }
    p{
      display: none;
    }
    p.deadline{
      font-size: 12px;
      display: inline;
      >span{
        margin-left: 5px;
        font-weight: bold;
      }
    }
    p.done{
      color: #8AFFB8;
      font-weight: bold;
    }
    p.expend{
      color: #E48E8E;
      font-weight: bold;
    }
  }
  .task__desc{
    color: #fff;
    @include grid();
    padding-right: 5px;
    >p{
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 13px;
      padding: 5px 0;
    }
  }
  
  .task__tags{
    span{
      color: #fff;
      font-size: 12px;
      opacity: .5;
      margin-right: 10px;
    }
  }
</style>