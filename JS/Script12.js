let info =[
    {
        fname : 'Rushi',
        lname : 'Jankar',
        age : 24,
        skills :["Java","Python"]
    },
    {
        fname : 'Rohit',
        lname : 'sharma',
        age : 28,
        skills :["Java","Python","SQL"]
    },
    {
        fname : 'Virat',
        lname : 'Kohli',
        age : 30,
        skills :["Java","Python","Java script"]
    }
]

// console.log(info[0])

info.forEach(function(ele)
{
    console.log(`${ele.fname} ${ele.lname}`)
})


info.forEach(function(ele)
{
    if(ele.age>25)
    {
        console.log(ele.fname)
    }
})


info.forEach(function(ele)
{
    ele.skills.push("Postgre")
})
console.log(info)


let q1 =info.reduce(function(acc,ele){

    return acc + ele.age
},0)
console.log(q1)

let q2 =info.reduce(function(acc,ele)
{
    return acc + ele.age
},0)
console.log(q2/info.length)


let q3 = info.forEach(function(ele){
    ele['address'] = "pune"
})
console.log(info)


info.forEach(function(ele){
    ele.companyName = " Capgemini"
})
console.log(info)


info.forEach(function(ele){
    delete ele.lname;
})
console.log(info)

info.forEach(function(ele)
{
    console.log(ele)
})

info.forEach(function(ele){
    if(ele.age>29){
        ele['fname']="Remo"
    }
})
console.log(info)