// map() , filter() , reduce(), forEach()
// find(), findIndex(), every() , some()


// function syntax is for array method is 
// function(element, indexnumber, array)


// map() ------> array
// filter() ---- array 
// reduce() ----> value
// forEach() ---- no return type 

// findIndex() -- number
// find()--- datatype
// some() - boolean
// every() - boolean




// map() is used with function it will return array
let year =[1898, 1900, 1987, 2020]
let age =[]
for  (let i=0;i<year.length;i++)
{
    // console.log(i);
    // console.log(2024 - year[i])
   age.push(2024 - year[i])
    
}
console.log(age)

let ages = year.map(function(el,index,arr)
{
    return 2024-el
}
)
console.log(ages)

//program2

let num =[11,22,33,44]

let sum = num.map(function(el,index,arr)
{
    return el+5
})
console.log("Map function: ",sum);


//filter() used to filter data from arrya and it will return array
let digit = [10,30,40,50,60]

let above50 = digit.filter(function(el,index,arr)
{
    return el>50
})
console.log("filter output: ",above50)


//reduce return value
let evennum = [2,4,6,8,10,12,14]

let xyz = evennum.reduce(function(acc,el,index,arr)
{
    return acc + el
},0)
console.log(xyz)



let cities = ["pune","mumbai","banglore","kolkata"];

//approach one

for(let i=0;i<cities.length;i++)
{
    console.log("welcome",cities[i]);
}

//approach 2 use foreach method

let a1 =  cities.forEach(function(el,index,arr)
{
    console.log("welcome",el)
  //  return ("welcome",el)  // foreach does not return anything
})


//program 5

let above80 = [40,50,600,80,88,90,200]

let data = above80.filter(function(el,index,arr)
{
    return el>80
}) 
console.log("number is > 80",data)


let data1 = above80.filter(function(el)
{
    return el>80
}) 
console.log("number is > 80",data1)

let marks = [40,50,77,60,88,90,20]
let result = marks.find(function(el) // find return first value who satisfy condition
{
    return el >50
})
console.log(result)


let indexnum = marks.findIndex(function(el,index,arr)// find return first index who satisfy condition
{
    return el>50
})
console.log(indexnum)

//every()  // retrurn boolean
let EveryEle = marks.every(function(el,index,arr)
{
    return el > 50
})
console.log(EveryEle) // return false because every() method  check condition for all element if fail for any element it will return false

//some()
let SomeEle = marks.some(function(el)
{
    return el >80
})
console.log(SomeEle) // it will check some element if condition true for any one element it will return true