//add your code here
$(document).ready(function(){
  doMath();
});
    

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath(){
  $("#equals").on('click', function(){
  num1 = parseFloat(num1.val());
  num2 = parseFloat(num2.val());
  operator = operator.val();
  
  
  
  function result (num1, num2, operator)
  {
    if (operator === '+' )
    {
      var result = num1 + num2;
      return result

    }
  console.log(result)
  }

    
  });
}