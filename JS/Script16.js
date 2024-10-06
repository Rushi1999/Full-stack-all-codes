class person{
fn = undefined
ln = undefined
age = undefined

display()
{
    console.log("inside...")
}
}


let rushi = new person()
console.log(rushi.fn)
console.log(rushi.ln)
console.log(rushi.age)
console.log(rushi.display)


let jankar = new person()
console.log(jankar.fn)
console.log(jankar.ln)
console.log(jankar.age)
console.log(jankar.display())


rushi.fn="Rushi"
rushi.ln = "jankar"
rushi.age = 23
console.log(rushi.fn)
console.log(rushi.ln)
console.log(rushi.age)

jankar.fn = "Ram"
jankar.ln="desai"
jankar.age = 25
console.log(jankar.fn)
console.log(jankar.ln)
console.log(jankar.age)


//object literal

let Car = {
    Brand : "Suzuki",
    price : 1200
}

console.log(Car.Brand)
console.log(Car.price)


//program2

class person1{
    constructor(fn,ln){
        this.fristname= fn,
        this.lastname =ln
    }
    display()
    {
        console.log("contructor")
    }
}

let Ram = new person1("Ram","Desai")
console.log(Ram)

let Shyam = new person1("Shyam","patil")
console.log(Shyam)




class cars{
    constructor(brand,price)
    {
        this.brand=undefined,
        this.price = undefined
    }
}

let maruti = new cars

