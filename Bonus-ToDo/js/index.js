import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.head', options);


var add= document.getElementById('add');
var remove= document.getElementById('remove');
var list=document.getElementById('list');

var removeAll= function(){
    list.innerHTML="";
    
}
var addTodo=function(){
    var todo= document.getElementById('userinput').value;
    if(todo!=""){
    var divRow=document.createElement('div');
    divRow.setAttribute('class','row');
    var divColumn1=document.createElement('div');
    var divColumn2=document.createElement('div');
    divColumn1.setAttribute('class','col-md-8 col-sm-6');
    divColumn2.setAttribute('class','col-md-4 col-sm-6');

    var listItem= document.createElement('li');
    var button = document.createElement('button');
    button.innerHTML= "&times";
    button.setAttribute("class","removeTodo btn btn-danger btn-xs");
    button.setAttribute('onclick','removeTodo(this)')
    listItem.innerHTML= '<span class="todoItem">' + todo + '</span>';
    divColumn1.appendChild(listItem);
    divColumn2.appendChild(button);
    divRow.appendChild(divColumn1);
    divRow.appendChild(divColumn2);
    list.appendChild(divRow);
    document.getElementById('userinput').value="";
    }
    else{
        alert('Empty Todo!!');
    }
    
}
var removeTodo=function(item){
    var li=item.parentElement;
    list.removeChild(li);
}

//My First Todo <button id="removeTodo" class="btn btn-danger btn-xs"> &times; </button>