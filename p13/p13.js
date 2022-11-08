// do {
    
// } while (condition);

let i ;
let a = 100;
console.log("All even numbers from 1 to 100")
for (i=1;i<=a;i++)
{
  if(i%2==0){
    console.log(i)
  }
}

let d = new Date;
let day = d.getDay() +1;
 console.log(`${day}`+" day on week")