// let ty = 10;
// for (let i = 0; i < ty; i++) 
//    setTimeout(() =>{   console.log(i);
// },2000);



// setTimeout(() => {
//     c.number = 10;
//         console.log(c);
// }, 1000);

// await resolveAfter2Seconds()


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    for (let i = 0; i < 10; i++) {
        await resolveAfter2Seconds(console.log(i));
      }
    // expected output: "resolved"
  }
  
  asyncCall();

  console.log("==================0")

//   while ( i = 0; i < 10; i++) {
//     console.log(a)
//   }

//   let i = 0;
// while (i < 10) {
//   setTimeout(() => console.log( i ), 2000);
//   i++;
//   }
  
console.log("===================1")


  
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    let i = 0
    while ( i < 10 ) {
        await resolveAfter2Seconds(console.log(i));
        i++
      }
      console.log("===================2")
    // expected output: "resolved"
  }
  
  asyncCall();


