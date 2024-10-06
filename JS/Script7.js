// methods 

let firstName = "chinmay"
// method 
// action  - convert every character to upperCase()
// return type  - string

let q1 = firstName.toUpperCase()

console.log(q1)

//lower case 

let lastname = "JANKAR"

let q2= lastname.toLowerCase()
console.log(q2)


let name = "Rushikesh"
let q3 = name.includes("sh") // return boolean and case sensitive
console.log(q3)


//indexof()
// 0 1 2 3 4 5   
// J a n k a r
let surname = "Jankar"

let q4 = surname.indexOf("n") // it will return index of character
console.log(q4)



///startwith(), endswith()
//return boolean value its check starting character and passing value match or not

let q5 = surname.startsWith("J");
console.log(q5) //true


let q6 = surname.endsWith("a")
console.log(q6)// false

let q7 = surname.endsWith("A")
console.log(q7) //false bz case sensitive


// trim()
//trimstart()
//trimend()
// trim character first and last
// it will only remove blank space
//trim()

let address = " Maharashtra "
console.log(address.length)
let q8 = address.trim()
console.log(q8)
console.log(q8.length)

//console.log("RUSHIIIIIIIIIII")
let month =" Aug"
console.log(month.length)
let q9 = month.trimStart();
console.log(q9.length)
console.log(q9)

let city = "Pune "
let q10 = city.trimEnd()
console.log(q10)


//replace()

let profile = " I'm software developer"
// let a1 = profile.replace("Java devloper","developer")
let a1 = profile.replace("developer","java developer")
console.log(a1)


let a2 = profile.replace("I'm","I am")
console.log(a2)




