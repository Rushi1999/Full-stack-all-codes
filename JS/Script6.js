
let info ={
    firstName : "Rushi",
    lastName : "Jankar",
    age : 23
}

// not applicable
// for(let i =0 ; i< info.lenght ; i++)
// {
//     console.log(i);
//     console.log(info.FirstName)
// }

// for(let key in info)
// {
//     // console.log(info.key)  not applicable shows undefined
//     console.log(key, info[key]);
// }

// console.log(typeof info)


for(let key in info)
{
    console.log(key, info[key])
}





// String


let firstName1 = "Rushi";
let lastName1 = 'Jankar'
let address = `Bhoom`



console.log(typeof firstName1)
console.log(typeof lastName1)
console.log(typeof address)


//combination

// string + number + number ----> string
// number + number ----> number
// string + number ---> string
// string + string --> string


let a =20
let b = 10 
let fn = "Rushi"
let c =  "Jankar"

console.log(a+b)
console.log(typeof(a+b))

console.log(a+b+c)
console.log(typeof(a+b+c))


console.log(c+b)
console.log(typeof(c+b))


console.log("my name is"+c+"my age is"+a)
console.log("my name is ${fn} my age is ${a}")

console.log(`my name is ${fn} and age is ${a}`) // correct way


// object in string 


let str = " welcome"
let fname ="Rushi"
let lname="Jankar"



console.log(`${str}${fname} ${lname}`)


let comp = "Capgemini"

console.log(`${str} to ${comp}`)



// prgram 4

let myName ="Rushikesh"    //string store data in string

for(let i =0 ; i< myName.length ; i++)
{
    console.log(i)
}

for(let i=0;i< myName.length ; i++)
{
    console.log(myName[i])
}



let i =0;
while(i<myName.length)
{
    console.log(myName[i])
    i++
}



