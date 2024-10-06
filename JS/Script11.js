console.log("---------------PGM1--------")

let student = [
    {
        fname : 'Rushikesh',
        lname : 'Jankar',
        city : 'Pune',
        skill :["Java","python"]
    },
    {

        fname : 'ram',
        lname : 'desai',
        city : 'mumabi',
        skill :["power bi"]
    },
    {
        
        fname : 'shyam',
        lname : 'sharma',
        city : 'delhi',
        skill :["Java","python","Java script"]

    }
]

// console.log(student[0].fname)

let a1 = student.forEach(function(ele)
{
    console.log(ele.fname)
})

student.forEach(function(ele)
{
    console.log(`${ele.fname} ${ele.lname}`)
})

// fetch details which student contain skill more than 2
let a2 = student.forEach(function(ele){
    if(ele.skill.length > 2){
    console.log(ele.fname)
    console.log(ele.lname)
    console.log(ele.skill)
    }else{
    console.log("Condition fail")
}
})



//MAP()
