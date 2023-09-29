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
      addTask: ''
    }
  },

  methods:{
    generateTask(){
      this.tasks.push(
        {
          object: this.addTask,
          isDone: false
        }
      )
    },

    removeTask(index){
      if(this.tasks[index].isDone) this.tasks.splice(index, 1)

    },
  }

}).mount('#app')