//חישוב סידרת מספרים פיבונאצית
let n1=0;
let n2=1;
let n3=1;
let fibo=[0,1];

function fibonachi(num){
  for(let i = 2; i < num ;i++){         
    fibo[i] = n3;      
    n1 = n2;       
    n2 = n3;       
    n3 = n1 + n2;   
  }
  return fibo;
 }  
 console.log(fibonachi(90)); 
 console.log(...fibo); 


