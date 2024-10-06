let a= 13
let b = "Rushi"
let c = [1,2,3]
let d ={
    fname : "Rushi",
    lname : "jankar"
}

let Dmap = new Map()


//set

let Aset = new Set()
console.log(Aset) // empty set with size 0 // it will ignore duplicate value

console.log(Aset.add(1))
Aset.add(2)
Aset.add(3)
Aset.add(4)
Aset.add(5)

console.log(Aset)


Aset.add(2)


let Hset = new Set(
    [11,22,33,44,55,22]
)

console.log(Hset) //ignore 22 bz duplicate value
console.log(Hset.size)

let e =Array.from(Hset) // convert into array

console.log(e)


//Program2

let RSet = new Set([1,2,3,4,5])

console.log(RSet.clear()) /// clear all the data


//program 3

let Bset = new Set([11,22,33,44])

console.log(Bset.has(11)) // number present
console.log(Bset.has(444)) // false num not available



for(let x of Bset.keys())
{
    console.log(x)
}

for(let y of Bset.values())
{
    console.log(y)
}


let Dset = new Set(
    [
        [1,"Rushi"],
        [2,"Jankar"]
    ]
)

Dset.forEach(function(v,k)
{
    console.log(v,k)
})

