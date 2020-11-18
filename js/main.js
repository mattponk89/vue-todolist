const appToDo = new Vue({
  el: '#root',
  data: {
    userInput: '',
    toDoList: []
  },
  methods: {
    addItemList: function(){
      this.toDoList.push(this.userInput);
      this.userInput = '';
    },
    removeItemList: function(removeIndex){
      this.toDoList.splice(removeIndex, 1);
    }
});
