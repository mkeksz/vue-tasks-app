export default {
  state: {
    tasks: []
  },
  mutations: {
    setTasks (state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    addTask({commit, getters}, task) {
      let taskId = 0
      getters.tasks.forEach(t => {
        if (taskId <= t.id) taskId = t.id+1
      })
      const updatedTasks = [ ...getters.tasks, {id: taskId, ...task} ]
      localStorage.tasks = JSON.stringify(updatedTasks)
      commit('setTasks', updatedTasks)
    },
    editTask({getters, commit, dispatch}, task) {
      const tasks = getters.tasks
      tasks.forEach((t, i) => {
        if (+t.id === +task.id) tasks[i] = task
      })
      dispatch('updateStatusTasks')
      commit('setTasks', tasks)
      localStorage.tasks = JSON.stringify(getters.tasks)
    },
    getTasks({commit, dispatch}) {
      if (!localStorage.tasks) return
      commit('setTasks', JSON.parse(localStorage.tasks))
      dispatch('updateStatusTasks')
    },
    getTaskById({getters}, id) {
      return getters.tasks.filter(value => value.id === +id)[0]
    },
    updateStatusTasks({getters, commit}) {
      const tasks = getters.tasks
      tasks.forEach(task => {
        if (task.status === 'inwork' &&
            new Date(`${task.date}T${task.time}`) < new Date()) task.status = 'expend'
      })
      commit('setTasks', tasks)
      localStorage.tasks = JSON.stringify(tasks)
    },

  },
  getters: {
    tasks: state => state.tasks
  }
}