// console.log("Hello");


//array methods

// let  city =["pune","mumbai","delhi","goa"];

// for(let i =0; i< city.length ; i++)
// {
//    // console.log(i);
//     console.log(city[i]);
// }

//push is used to add element at the last of array

let fruts = ["mango","banana","apple"];
let q1 = fruts.push("kivi");
console.log(q1)
console.log(fruts);

/* unshift method used to add element at the starting of array*/
let cars =["bmw","scoda","oddy"]
let q2 = cars.unshift("maruti");
console.log(q2);
console.log(cars);

//pop remove the last ele

let animal = ["cow","goat","hourse"];
let q3 = animal.pop()

console.log(q3)
console.log(animal)


// remove first element

let fastfood = ["momos","burger","pizza","panipuri"]
let q4 = fastfood.shift();

console.log("removed item is: ",q4)
console.log(fastfood);

/// includes is shows where that data include/present in array

let name2 = ["rushi","ram","shyam"];
let q5 = name2.includes('rushi');

console.log(q5)
console.log(name2)

// indexof used for printing index value of ele
let name3 = ["rushi","ram","shyam"];
let q6 = name3.indexOf('ram');

console.log(q6)

//reverse used for reverse string
let fastfood1 = ["momos","burger","pizza","panipuri"]
let q7 = fastfood1.reverse();

console.log(q7);

// contact to combine to array or value into array

let festival = ["Ganapati","diwali","navratri"];
let q8 = festival.concat("ramnavmi");

console.log(q8)

let festival1 = ["Ganapati","diwali","navratri"];
let fastfood2 = ["momos","burger","pizza","panipuri"]
let q9 = festival1.concat(fastfood2);

console.log(q9);


//  at to find which ele present at 2 index

let job =["DS","SD","DOCTOR"]
let a = job.at(2)
console.log(a)