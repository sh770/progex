
let strUp ="";
let strDn ="";
function printStar(numSatr){
for(let i=1 ; i<numSatr ; i++){
     strUp ="";
     strDn ="";

        for (j=1 ; j<=i ;j++){
               if(j - 1){
                strUp = strUp + j + " ";
                strDn = j - 1 + " " + strDn;
               }
               else{
                strUp = j + " " + strUp;
               }
    }                                             
    console.log("  ".repeat(numSatr - i)  + strUp + strDn );
 }
}
printStar(11);
