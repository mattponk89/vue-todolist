const appToDo = new Vue({
  el: '#root',
  data: {
    userInput: '',
    toDoList: [],
    toDoChecked: []
  },
  methods: {
    addItemList: function(){
      this.toDoList.push(this.userInput);
      this.userInput = '';
    },
    removeItemList: function(removeIndex){
      this.toDoList.splice(removeIndex, 1);
    },
    updateItem: function(updateIndex){
      if(this.toDoChecked.includes(updateIndex)){

      }
      this.toDoChecked.push(updateIndex)
    }
  }
});
