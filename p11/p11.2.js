// 1
const people = {
    firstname:"shalom", 
    lastname:"harpaz",  
    age: 41,
    carname:"bmw", 
    fullname(){return this.firstname + " " + this.lastname;}
};
    people.fullname();
    console.log(people.fullname());


// console.log("helow world")

// 2
let d = new Date(1981,01,02)
console.log(d)

const date2 = new Date('1981-01-02');
console.log(date2)
// 2
let date = new Date();

date.setFullYear(1981, 0, 2,);

console.log('date:', date);

//3

const people2 = {
    firstname:"shalom", 
    lastname:"harpaz",  
    age: 41,
    carname:"bmw", 
    date,
    fullname(){return this.firstname +" "+ this.lastname +" "+ this.date;}
};
    people2.fullname();
    console.log(people2.fullname());

    //4

    let date4 = new Date();

    date4.setFullYear(1981, 0, 35,);
    
    console.log('date:', date4);

    //התאריך הלא חוקי מוסיף את הימים לחודש או לשנה והשארית זה מספר הימים
    //  date4.setFullYear(1981, 0, 35,);
    //הדפיס את זה
    //date: 1981-02-04
