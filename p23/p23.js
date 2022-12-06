let x = 25;
let y = 10;
let b = x + y;
console.log("=1============")


try { if (b > 100) { throw "B is not greater than 100 " } else (console.log(b > 100))} catch (error) { console.log(error + " +:1") };
try { if (b < 100) { throw "B is not smaller than 100" } } catch (error) { console.log(error +" +:2") };
try { if (b == 35) { throw "b is equal to 100" } } catch (error) { console.log(error +" +:3") };
console.log("=2============")
let q = "Hello World";
let l = Number(q);
console.log(l)
try {
    let str = "Hello World";
    let num = Number(str); throw "no nam"
    console.log(num);
}
catch (error) { console.log(error + " error " + 8) };

console.log("=3============")

console.log(x)

let w = x.toString()
console.log(x.toString())
console.log(typeof w)
let we = 55;
try { we.toString() ; { throw "we is num" }  } catch (e) { console.log(e +" +:7") };

console.log("==============")
