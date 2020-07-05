<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="main__content">
        <form @submit.prevent="submitHandler">
          <label>
            <input name="title" :class="{invalid: this.$v.title.$dirty && !this.$v.title.required}" v-model.trim="title" maxlength="26" type="text" placeholder="Введите название">
          </label>
          <label>
            <textarea name="description" v-model.trim="description" maxlength="2000" placeholder="Введите описание"></textarea>
          </label>
          <label>
            <input name="tags" v-model.trim="tags" maxlength="60" type="text" placeholder="Введите теги через #">
          </label>
          <label>
            <input type="date" v-model="date" :class="{invalid: this.$v.date.$dirty && !this.$v.date.required}">
          </label>
          <label>
            <input type="time" v-model="time">
          </label>
          <label>
            <input type="checkbox" v-model="done"> <span>Выполнено</span>
          </label>
          <button type="submit">Сохранить задачу</button>
        </form>
      </div>
    </div>
    <button-back/>
  </main>
</template>

<script>
  import ButtonBack from "@/components/ButtonBack";
  import {required} from "vuelidate/lib/validators";
  
  export default {
    name: "Task",
    data: () => ({
      id: 0,
      title: '',
      description: '',
      tags: '',
      date: '',
      time: '',
      status: 'inwork',
      done: false
    }),
    validations: {
      title: {required},
      date: {required}
    },
    async mounted() {
      this.id = this.$route.params.id
      const task = await this.$store.dispatch('getTaskById', this.id)
      this.title = task.title
      this.description = task.description
      this.tags = '#'+task.tags.join('#')
      this.date = task.date
      this.time = task.time
      this.status = task.status
      if (this.status === 'done') this.done = true
    },
    watch: {
      done() {
        if (this.done) this.status = 'done'
        else this.status = 'inwork'
      }
    },
    components: {
      ButtonBack
    },
    methods: {
      async submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        let tags = this.tags.replace(' ', '').split('#')
        tags.shift()
        const formData = {
          id: +this.id,
          title: this.title,
          description: this.description,
          tags: tags,
          date: this.date,
          time: this.time,
          status: this.status
        }

        await this.$store.dispatch('editTask', formData)
        await this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/components/mixins.scss", '../assets/scss/components/vars';
  
  .main{
    background-color: $background_color;
    border-radius: 20px;
    padding: 20px;
    position: relative;
  @include grid(center, center);
  }
  .main__wrapper{
  //margin: 40px auto 0;
    display: grid;
    grid-row-gap: 20px;
  }
  .main__content{
    background-color: $main_color;
    border-radius: 8px;
    min-width: 580px;
    padding: 20px;
    >form{
      @include grid();
        grid-row-gap: 13px;
      input,
      textarea{
        width: 100%;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .1);
        padding: 10px 15px;
        border: 2px solid #fff;
      }
      input.invalid,
      textarea.invalid,
      input.invalid::placeholder,
      textarea.invalid::placeholder{
        border-color: #E48E8E;
        color: #E48E8E;
      }
      input::placeholder,
      textarea::placeholder{
        font-weight: 900;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        opacity: .5;
        letter-spacing: .6px;
      }
      textarea{
        height: 114px;
        resize: none;
      }
      button{
        margin-top: 40px;
        background: linear-gradient(123.49deg, #74E8A2 27.8%, #74E8BE 91.75%), #74E8A2;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        border-radius: 8px;
        text-align: center;
        font-weight: bold;
        font-size: 28px;
        color: #fff;
        padding: 10px;
      }
      input[type="checkbox"]{
        border: none;
        box-shadow: none;
        width: auto;
        margin-top: 10px;
      }
      label span{
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        user-select: none;
      }
    }
  }
</style>