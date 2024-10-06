//concat() 

let cars =["bmw","maruti","suzuki"]
let varient =["320","nano","hexa"]

 console.log( cars.concat(varient));

 //slice(start number , end number) alway print end number -1 elements
///            0       1       2       3
 let fruits =["mango","apple","kivi","banana"]
  //              -4      -3      -2      -1
 console.log(fruits.slice(1,2));
 console.log(fruits.slice(0,3));
 console.log(fruits.slice(2,-3)) // PTNT BLANK BECAUSE STARTING ELEMENT IS NEXT TO ENDING NUMBER
 console.log(fruits.slice(3,2)) 


 //SPLICE(STARTING INDEX, NO OF ELE)

 //console.log(fruits.splice(0,2));
 //console.log(fruits)
 //console.log(fruits.splice(1,2))
 //console.log(fruits.splice(2,3))
//console.log(fruits.splice(1,-3))
//console.log(fruits.splice(3,-3)) //PTNT BLANK BECAUSE STARTING ELEMENT IS NEXT TO ENDING NUMBER
//console.log(fruits.splice(1,-3)) // no of element should not be negative
console.log(fruits.splice(1,3))


// flat()

//                    0                   1                     2
//                0        1         0         1         0           1
let states = [["wardha","nagpur"],["jaipur","udaipur"],["kanpur","lucknow"]]


console.log(states[0][1])
console.log(states.flat())


//fill(fill value, starting , ending position) // fill sepecific element in array with value 
// endposition -1
//         0 1 2 3 4 5 6 7 8    
let num = [1,2,3,4,5,6,7,8,9]

console.log(num.fill("@",2,6))
let b = num.fill("R",3,7)
console.log(b)


// indexOf()
//               0         1          2
let country = ["india","pakistan","srilanka"]

let q11 = country.indexOf("pakistan")
let q12 = country.indexOf("Pakistan")

console.log(q11)
console.log(q12)



// at()
let q13 = country.at(2)
console.log(q13)

// reverse()
country = ["india","akistan","srilanka"]
country.reverse()
console.log(country)

// sort()

console.log("sort",country.sort())



//join() // it will join all element with that value

let names=["Rushi","Rahul","Ram"]

console.log(names.join("$"))
console.log(names.join("*"))


