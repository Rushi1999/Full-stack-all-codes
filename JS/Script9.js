//ES
// Array, string, object
//              0     1       2   
let name = ["Rushi","Ram","Jankar"]

//normal approach 

// let q1 = name[0]
// let q2= name[1]
// let q3= name[2]
// console.log(q1)
// console.log(q2)
// console.log(q3)

//stanard approach

let [x1,x2,x3] = name

console.log(x1)
console.log(x2)
console.log(x3)


let city = ["Pune","Nagpur","Mumbai","Delhi"]

let [a1,a2,a3,a4] = city
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)


//program2
let address = [["Mukai","Nagar","Hinjewadi"],["Bhoom","Barshi"]]

let [[b1,b2,b3],[c1,c2,c3]] = address

console.log(b1)
console.log(b2)
console.log(b3)

console.log(c1)
console.log(c2)


//program 3 

let info ={
    fname : 'Rushikesh',
    Lname : 'jankar'
}

console.log(info.fname)
console.log(info.Lname)

let {fname:fn, Lname:ln}=info
console.log(fn)
console.log(ln)

//program 4

let details ={
    firstName :'Rushi',
    fname : {
        farther :'Ram',
        mother : 'Sita'

    }
}

let { firstName:f1,fname:{farther:f2, mother:m1}} = details

console.log(f1)
console.log(f2)
console.log(m1)


//normal way dot and bracket notation

// retrive
console.log(details.firstName)
console.log(details['firstName'])

// insert 
details.age = 20
details['address'] ="Pune"
console.log(details)

// update
details.firstName = "Raju"
console.log(details.firstName)
details['firstName'] ="Ram"
console.log(details.firstName)

// delete 
delete details.firstName;
console.log(details)


