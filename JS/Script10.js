//program 1
//              0       1       2
let names = ["Rushi","Sneha","Jankar"]

let q1 = names[0]
let q2 = names[1]
let q3 = names[2]

console.log(q1)
console.log(q2)
console.log(q3)

let [n1,n2,n3] = names
console.log(q1)
console.log(q2)
console.log(q3)

//program2
let animals = [["Cat","Dog","Lion"],["elephant","fox"]]

let [[a1,a2,a3],[b1,b2]] = animals

console.log(a1)
console.log(a2)
console.log(a3)
console.log(b1)
console.log(b2)

//program3

let info={
    firstName :'Rishi',
    lastname : 'Jankar'
}

let {firstName:fn,lastname:ln}=info
console.log(fn)
console.log(ln)


//program4
let details ={
    myname:'Rushikesh',
    farther : {
            fname : 'Ramesh',
            lname : 'deshande'
    }
}

let {myname:m,farther:{fname:f1,lname:l1}} = details

console.log(m)
console.log(f1)
console.log(l1)



//program5
console.log("------------------program5-------")
let student = [
    {
        firstName : 'Rushi',
        lastname :'Jankar'
    },
    {
        firstName : 'Ram',
        lastname : 'Deshpande'
    }
]


let [{firstName:f11,lastname:l11},{firstName:f22,lastname:l22}] = student

console.log(f11)
console.log(l11)
console.log(f22)
console.log(l22)


console.log("---------------------PGM6------")

let emp = [
    {
        firstName : 'Rushi',
        lastname :'Jankar',
        skill :["Java","Python"]
    }
]

let [{firstName:f3,lastname:l3,skill:[s1,s2]}] = emp

console.log(f3)
console.log(l3)
console.log(s1)
console.log(s2)


console.log("----------PGM7----------")

let info11 = {
    firstName1:'Rushi',
    lastname1:'Jankar',
    age : 20,
    city : 'Pune'
}
function getfirstname ({firstName1,city}){
    console.log(firstName1)
    console.log(city)
}
getfirstname(info11)

console.log("-----------PGM8---------")

let cars ={
    brand : 'BMW',
    type : 'petrol',
    avg : 60

}

function getdetails({brand,type}){
    console.log(brand)
    console.log(type)
}
getdetails(cars)


console.log("------------PGM9-------")

let food = {
    type :'Fast',
    fname : 'panipuri',


}

 function getinformation({type,fname}){
    console.log(type)
    console.log(fname)
}
getinformation(food)