// Q1
/** 
The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

sleep_in(False, False) → True
sleep_in(True, False) → False
sleep_in(False, True) → True
 */
let weekday = false;
let vacation = true;
function sleep_in(weekday, vacation) {

    return !weekday || vacation;
}

   console.log(sleep_in(weekday, vacation));
//
let weekday1 = false;
let vacation1 = true;

    function sleep_in2(weekday1, vacation1) {

      return (((weekday1 == false ) && ( vacation1 == false)) || ((weekday1 == false ) && ( vacation1 == true)))
      //       true
      //   }else{return false}
       }



       console.log(sleep_in2(weekday1, vacation1));