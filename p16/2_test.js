// Q2
/**
 * We have two monkeys, a and b, and the parameters
 *  a_smile and b_smile indicate if each is smiling.
 *  We are in trouble if they are both smiling or if neither of them is smiling.
 *  Return True if we are in trouble.
 * 
 * monkey_trouble(True, True) → True
 * monkey_trouble(False, False) → True
 * monkey_trouble(True, False) → False
 *  */
let a_smile = !true;
let b_smile = true;
 function monkey_trouble(a_smile, b_smile) {
    return (((a_smile == true) && (b_smile == true )) || ((a_smile == false) && (b_smile == false )))
 }
       // return true   
     
    // else {return false}
    
console.log(monkey_trouble(a_smile, b_smile));
    