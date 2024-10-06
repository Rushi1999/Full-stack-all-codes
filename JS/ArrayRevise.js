// pop
// unshift
// push
// shift
// includes
// indexOf
// reverse
// concat
// at
// slice
// splice
//flat
// fill
// join
// map() ------> array
// filter() ---- array 
// reduce() ----> value
// forEach() ---- no return type 

// findIndex() -- number
// find()--- datatype
// some() - boolean
// every() - boolean

//program1

//push
// add element at last
let city = ["pune","nagar","mumbai","delhi"]
let q2 = city.push("Dubai")
console.log(city)

//unshift
//add ele at the first
let q4 = city.unshift("Dharashiv")
console.log(city)

//shft remove first element
let q3 = city.shift()
console.log(city)

//pop remove last element
let Village = ["pune","nagar","mumbai","delhi"]
let q1 = Village.pop()
console.log(q1)
console.log(Village)

//include
// it will check ele is present or not in array
let q5 = Village.includes("pune")
console.log(q5)


//indexof
// it will use to find index of ele
// if ele not present then return -1
let q6 = Village.indexOf("pune")
console.log(q6)

//revser
// it will revser array
let q7 = Village.reverse()
console.log(q7)

//concat 
// concat 2 array into one array
let fname = ["Rushikesh"]
let lname = ["Jankar"]
let q8 = fname.concat(lname)
console.log(q8)

//at 
// it will return ele present on given position
let num = [1,2,3,4,5,6]
let q9 = num.at(2)
console.log(q9)

//slice
// it will return provided pos ele in array
//          0 1 2 3 4 5 
let num1 = [1,2,3,4,5,6]
//         -6-5-4-3-2-1 
let q10 = num1.slice(0,2)
console.log(q10)
console.log(num1.slice(-1,-3)) // return blank array becase starting pos behind end pos
console.log(num1.slice(-2,5))

//splice
// it will delete element 
//splice(start pos , total ele)
console.log(num1.splice(0,2))
console.log(num1.splice(1,4))
console.log(num1)





//multi dimensional arra

//flat()
//it will return all element in one array from multi dimension array
//                   0                    1 
//            0       1       2       0       1
let cars =[["BMW",'SUZUKI',"TATA"],["Pune","mumbai"]]
let a1 = cars.flat()
console.log(a1)

//join()
//join ele with @
let food=["Panipuri","Samosa"]
let a2 =food.join("@")
console.log(a2)
     

//map
// it will performace operation with all ele
let color =["Red","Green","Black"]
let a3 = color.map(function(ele,ind,arr)
{
    return ele+"GUD"
})
console.log(a3)


let num2 = [2,4,6,8]
let a4 = num2.map(function(ele){
    return ele +1
})
console.log(a4)


//filter
// aaply condition on all ele
let OddNum= [1,3,5,7,9]
let a5 = OddNum.filter(function(ele)
{
    return ele>8
})
console.log(a5)


//reduce
// it will return or reduce r
let evenNum =[2,4,6,8]
let a6 = evenNum.reduce(function(ac,ele){
    return  ac + ele
},0)
console.log(a6)