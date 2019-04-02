calculateSum();

function calculateSum(a, b,) {
  return (a + b);
  
 }
 console.log(calculateSum(2.113, 3.225) );
 console.log(5.338.toFixed(2));


 function sum(){
   var val = 0;
   for (var i = 0; i < arguments.length; i++){
     val +=arguments[i];
   }
   return val;
 }

 

 module.exports = {
  calculateSum
 };