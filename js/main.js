const appToDo = new Vue({
  el: '#root',
  data: {
    userInput: '',
    toDoList: []
  },
  methods: {
    addItemList: function(){
      let newToDoItem = {
        textToDo: this.userInput,
        isChecked: false
      }
      this.toDoList.push(newToDoItem);
      this.userInput = '';
    },
    removeItemList: function(j){
      this.toDoList.splice(j, 1)
    },
    toggleCheck: function(i){
      if(this.toDoList[i].isChecked == false){
        this.toDoList[i].isChecked = true
        console.log(this.toDoList[i].isChecked)

      } else{
        this.toDoList[i].isChecked = false
        console.log(this.toDoList[i].isChecked)
      }
    }

  }
});
