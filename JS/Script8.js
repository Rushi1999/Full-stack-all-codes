

//program 1 
// string store data into array
// 0 1 2 3 4
// R u s h i

let name = "Rushi"
let q1 = name.charAt(2)
console.log(q1)

let q2 = name.charCodeAt(2) // it will print ASCII value for character
console.log(q2)


let surname = "Jankar"
let q3 = name.concat(surname);
console.log(q3)


let q4 = name.concat(" "+surname)
console.log(q4)



//program 4

let address = "Rushikesh"

let q5 = address.replace("s","S") // it will replace only first character
console.log(q5)

let q6 = address.replaceAll("s","S") // it will replace all character
console.log(q6)


//program 5


let city = "Pune"
// 0 1 2 3 
// p u n e
//-4 -3 -2 -1
console.log(city.slice(0,2))
console.log(city.slice(-3,2))
console.log(city.slice(2,-3)) // ot work bz starting position next to end pos



// program 6
//padstart(size,want to add numb or string)
//padend()

let num = "5"
let q7 = num.padStart(3,0) //it will add 0 at the start
console.log(q7)


let q8 = num.padEnd(4,0)
console.log(q8)


/// program 7 

let food = "Panipuri"
let q9 = food.repeat(2) // it will repeat string 2 time
console.log(q9)


// program 8 

let gmail = "rushijankar1999@gmail.com"
let q10 = gmail.split("a") // convert into array 
console.log(q10)

let q11 = q10.join("a") // convert into string
console.log(q11)
