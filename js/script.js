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
      console.log(this.addTask);
      // this.tasks.push(this.addTask);
    }
  }

}).mount('#app')