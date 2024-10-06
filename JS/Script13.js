//data type

let a=12
console.log(typeof a )

let b =10.45
console.log(typeof b)

let d = true
console.log(typeof d)

let c = "Rushi"
console.log(typeof c)

let arr = [1,2,3,4]
console.log("---",typeof arr)

let obj ={
    fname : "Ram",
    lname : "Desai"
}
console.log(typeof obj)

///MAP()
//how to create map?

let Dmap = new Map();
console.log(Dmap)  // without size 0 it will create

Dmap.set(1,"Rushi"),
Dmap.set(2,"Remo")
Dmap.set(3,"Shyam")

console.log(Dmap)


let Amap = new Map(
    [
       [1,2],
       [2,2]

    ]
)
console.log(Amap)


let Rmap = new Map([
    [1,"Rushi"],
    [2,"Jankar"],
    [3,"Pune"]
])

console.log(Rmap)

//retrive
console.log(Rmap.size)

let q1 = Rmap.has(3)
console.log(q1)

//update
Rmap.set(4,"Ram")
console.log(Rmap)


//delete      
Rmap.delete(2) // it will delete 2 ele
console.log(Rmap)





// Rmap.forEach(function(k,v){
//     console.log(k,v)
// })


