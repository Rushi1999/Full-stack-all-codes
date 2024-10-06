//object litreture 


// let rushi={
//     fn : "rushi",
//     ln : "jankar",
//     age : 24
// }


// let Ram ={
//     fn :"Ram",
//     ln :"Desai",
//     age : 25
// }


// console.log(rushi)
// console.log(Ram)


//advance approach //class

// class person{
//     fn = undefined
//     ln = undefined
//     age =undefined
// }

// let rushi = new person()
// let Ram = new person()

// console.log(rushi)
// console.log(Ram)



//contructor


// class person{
//     constructor(fn,ln,age)
//     {
//         this.fn = fn
//         this.ln = ln 
//         this.age = age
//     }
// }

// let rushi = new person("Rushi","Jankar",23)

// let Ram = new person("Ram","Desai",34)

// console.log(rushi)
// console.log(Ram)


//class with get set WORD OR METHOD


class person{

    setfirstname(fn)
    {
        this.fn = fn
    }
    setlastname(ln)
    {
        this.ln=this.ln
    }
    setage(age)
    {
        this.age = age
    }
}


console.log(person) // empty bz data not available


let rushi = new person("Rushi","jankar",20) // this approach not works for get and set 
console.log(rushi.fn)


rushi.setfirstname("Rushi")
rushi.setlastname("Jankar")
rushi.setage(20)

console.log(rushi)


//retrive
console.log(rushi)

//add
rushi.address = "Pune"
console.log(rushi)

//update

rushi.fn="Ram"
console.log(rushi)

//delete
delete rushi.address
console.log(rushi)


// let sum = true * 3
// console.log(sum)



// class set get keyword


class car{
    set firstname(fn1)
    {
        this.fn=fn
    }
    set lastname(ln)
    {
        this.ln = ln
    }
    set age(age)
    {
        this.age = age
    }
}

console.log(car)

//retrive 
console.log(car)


//add
car.price = 2000;
console.log(car)
//update
car.firstname ="suzuki"
car.lastname="maruti"
car.age = 12
console.log(car)


//delete
delete car.price ;
console.log(car)

