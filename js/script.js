const { createApp } = Vue;

createApp({
  data(){

    return{
      tasks: [
      {
        object: 'commissione 1',
        isDone: false
      },
      {
        object: 'commissione 2',
        isDone: false
      },
      {
        object: 'commissione 3',
        isDone: false
      },
      {
        object: 'commissione 4',
        isDone: false
      }
      ],

      counter: 0,
      addTask: '',
      isCorrect: true
    }
  },

  methods:{
    generateTask(){
      if(this.addTask.length < 5) this.isCorrect = false
      else{
        this.tasks.unshift(
          {
            object: this.addTask,
            isDone: false
          })
          this.addTask = '',
          this.isCorrect = true
      }
    },

    removeTask(index){
      if(this.tasks[index].isDone) this.tasks.splice(index, 1)
    },
  }

}).mount('#app')