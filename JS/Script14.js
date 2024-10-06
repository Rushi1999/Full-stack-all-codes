//program 1 

let Bmap = new Map(
  [
    [1,"Mango"],
    [2,"Apple"],
    [3,"orange"],
    [5,"Banana"]
  ]
)


//retrive 

console.log(Bmap.size)
let a = Bmap.has(1)
console.log(a)

//add
Bmap.set(6,"Staberry")
console.log(Bmap)

//update
Bmap.set(1,"Rushi")
console.log(Bmap)

//delete
Bmap.delete(1)
console.log(Bmap)


//methods
console.log("------------------")
Bmap.forEach(function(V,K)
{
    console.log(V,K)
})

for(let x of Bmap.keys())
{
    console.log(x)
}

for(let x of Bmap.values())
{
    console.log(x)
}

//method on map 

let q1 = Bmap.size
console.log(q1)


let q2 = Bmap.get(2) // used to fetch that num of ele
console.log(q2)

let q3 = Bmap.set(2)
console.log(q3)

let q4 = Bmap.get(2)
console.log(q4)

let q5 =  Bmap.clear(2)
console.log(q5)

let q6 = Bmap.delete(2)
console.log(q6)

console.log(Bmap)


let Mmap = new Map(
    [
      [1,"Mango"],
      [2,"Apple"],
      [3,"orange"],
      [5,"Banana"]
    ]
  )

Mmap.forEach(function(V,k)
{
    console.log(V,k)
})

for(let a of Mmap.keys()) // print only keys [keys,values]
{
    console.log(a)
}

for(let b of Mmap.values()) // print only values
{
    console.log(b)
}

for(let c of Mmap.entries()) // print al enterie
{
    console.log(c)
}