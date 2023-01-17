let number1=parseInt(prompt("enter the first number"));
let number2=parseInt(prompt("enter the second number"));
let number3=parseInt(prompt("enter the third number"));
let number4=parseInt(prompt("enter the fourth number"))


let heading=document.querySelector(".heading");
heading.innerText=`${number1},${number2},${number3},${number4}`;

let assign=document.querySelector(".assign");
assign.addEventListener("click",function(){
   if(number1<number2 && number1<number3 && number1<number4){
      if(number2<number3 && number2<number4){
         if(number3<number4){
            heading.innerText=`${number1},${number2},${number3},${number4}`;
         }
         else{
            heading.innerText=`${number1},${number2},${number4},${number3}`;
         }
      }
      else if(number3<number2 && number3<number4){
         if(number2<number4){
            heading.innerText=`${number1},${number3},${number2},${number4}`;
         }
         else{
            heading.innerText=`${number1},${number3},${number4},${number2}`;
         }
      }
      else{
         if(number2<number3){
            heading.innerText=`${number1},${number4},${number2},${number3}`;
         }
         else{
            heading.innerText=`${number1},${number4},${number3},${number2}`;
         }
      }
   }
   else if(number2<number1 && number2<number3 && number2<number4){
      if(number1<number3 && number1<number4){
         if(number3<number4){
            heading.innerText=`${number2},${number1},${number3},${number4}`;
         }
         else{
            heading.innerText=`${number2},${number1},${number4},${number3}`;
         }
      }
      else if(number3<number1 && number3<number4){
         if(number1<number4){
            heading.innerText=`${number2},${number3},${number1},${number4}`;
         }
         else{
            heading.innerText=`${number2},${number3},${number4},${number1}`;
         }
      }
      else{
         if(number1<number3){
            heading.innerText=`${number2},${number4},${number1},${number3}`;
         }
         else{
            heading.innerText=`${number2},${number4},${number3},${number1}`;
         }
      }
   }
   else if(number3<number1 && number3<number2 && number3<number4){
      if(number1<number4 && number1<number2){
         if(number2<number4){
            heading.innerText=`${number3},${number1},${number2},${number4}`;
         }
         else{
            heading.innerText=`${number3},${number1},${number4},${number2}`;
         }
      }
      else if(number2<number1 && number2<number4){
         if(number1<number4){
            heading.innerText=`${number3},${number2},${number1},${number4}`;
         }
         else{
            heading.innerText=`${number3},${number2},${number4},${number1}`;
         }
      }
      else{
         if(number1<number2){
            heading.innerText=`${number3},${number4},${number1},${number2}`;
         }
         else{
            heading.innerText=`${number3},${number4},${number2},${number1}`;
         }
      }
   }
   else{
      if(number1<number2 && number1<number3){
         if(number2<number3){
            heading.innerText=`${number4},${number1},${number2},${number3}`;
         }
         else{
            heading.innerText=`${number4},${number1},${number3},${number2}`;
         }
      }
      else if(number2<number1 && number2<number3){
         if(number1<number3){
            heading.innerText=`${number4},${number2},${number1},${number3}`;
         }
         else{
            heading.innerText=`${number4},${number2},${number3},${number1}`;
         }
      }
      else{
         if(number1<number2){
            heading.innerText=`${number4},${number3},${number1},${number2}`;
         }
         else{
            heading.innerText=`${number4},${number3},${number2},${number1}`;
         }
      }
   }
   
})