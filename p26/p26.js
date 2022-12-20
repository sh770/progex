// Read And Write Files With Node.js

// fs module is a core module, so we don't need to install it
// import { readFile, writeFile, appendFile } from 'fs';

const fs = require('fs');

// readFile is an asynchronous function
// readFile takes 3 arguments: file name, encoding, callback function
// callback function takes 2 arguments: error, data
// let Data_base;
//  async function f(){
//     await new Promise((resolve ,reject) => {
//         fs.readFile('readme.txt', 'utf8', (error, data) => {
//     if (error){
//         console.log("cannot find file");
//     } 
//     resolve(data)
//     })
//     }).then(data => {Data_base = data.split(" ")})
// }
// await f();
// console.log(Data_base);

console.log(fs.readFileSync("readme.txt", "utf8").split(" "));

console.log("==========")
console.log(fs.readFileSync("ex1.txt", "utf8").split(" "));


 /*
===============
let Data_base
async function f(){
  await new Promise((resolve, reject) => {
    readFile("ex1.txt", "utf8", (error, data) => {
      if(error){
        console.log("cannot find file");
      }
      resolve(data)
    })
  }).then(data => {Data_base = data.split(" ")});
}

await f()
console.log(Data_base)
*/




// writeFile is an asynchronous function
// writeFile takes 3 arguments: file name, data, callback function
// callback function takes 1 argument: error

// writeFile('writeme.txt', 'Goodbye world~', (err) => {
//     if (err){
//         console.log(err);
//     } 
//     console.log('Write operation completed');
//     }
// );


// // appendFile is an asynchronous function
// // appendFile takes 3 arguments: file name, data, callback function
// // callback function takes 1 argument: error

// appendFile('writeme1.txt', '\n \t\ \t Hello World!', (err) => {
//     if (err){
//         console.log(err);
//     } 
//     console.log('Append operation completed');
//     }
// );



// Q.1: split the data from readme in to an array of substrings (words). and print it!


