//add your code here
$(document).ready(function(){
  doMath();
});
    

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

 function result(num1, num2, operator) {
    if (operator === '+' )
    {
      var total = num1 + num2;
      return total

    }
 // console.log(total)
  }




function doMath(){
  $("#equals").on('click', function(){
  num1new = parseFloat(num1.val());
  num2new = parseFloat(num2.val());
  operatornew = operator.val();
  
  let ans = result(num1new, num2new, operatornew)
  console.log(ans)
  $("#equals").on("click", result);
  
   $("#result").val("helloworld")
  
  });
 
}