const appToDo = new Vue({
  el: '#root',
  data: {
    userInput: '',
    toDoList: [],
    numTodo: 0
  },
  methods: {
    addItemList: function(){
      let newToDoItem = {
        textToDo: this.userInput,
        isChecked: false
      }
      this.toDoList.push(newToDoItem);
      this.numTodo++;
      console.log(this.numTodo);
      this.userInput = '';
    },
    removeItemList: function(el, j){
      if(this.toDoList[j].isChecked == false){
        this.numTodo--;
      }
      this.toDoList.splice(j, 1);
      console.log(this.numTodo);
    },
    toggleCheck: function(i){
      if(this.toDoList[i].isChecked == false){
        this.toDoList[i].isChecked = true;
        this.numTodo--;
        console.log(this.numTodo)
      } else{
        this.toDoList[i].isChecked = false
        this.numTodo++;
        console.log(this.numTodo)
      }
    }

  }
});
