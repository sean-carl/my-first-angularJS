function TodoCrtl($scope) 
{  
  $scope.newItem = "";  
  $scope.todoList = [{ label: "買牛奶" }, { label: "繳電話費" }];  
  $scope.addItem = function()
  {
  	  if(this.newItem)
  	  {
  	  	this.todoList.push({label:this.newItem});
  	  	this.newItem = "";
  	  }
  }
}  
