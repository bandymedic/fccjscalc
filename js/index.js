var box = document.getElementById('screen');
var x = 0;

function toScreen(x){
  box.value += x;
  if(x === 'c'){
    box.value = '';
  };
}

function answer(){
  x = box.value;
  x = eval(x);
  box.value = x;
}

function powers(){
  x = box.value;
  x = eval(x*x);
  box.value = x;
}

function backspace(){
  var num = box.value;
  var len = num.length - 1;
  var newNum = num.substring(0, len);
  box.value = newNum;
}