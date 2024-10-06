// map() , filter() , forEach() , reduce()
// every() , some() , find(), findIndex()


// let fruits = ["apple","mango","banana"]


let year = [2000, 1999, 1998, 1980]
let age =[];
for(let i = 0 ; i< year.length;i++)
{
    let q1 = 2024 - year[i];
    age.push(q1);
}
console.log(year)
console.log(age)


// push

let num =[10,30,50,66,70,80,99]
let above60=[]

for(let i=0;i<num.length;i++)
{
    if(num[i]>60)
    {
        above60.push(num[i])
    }
}
console.log(above60)


//find array total

let number1=[1,2,3,4]
let total = 0;

for(let i =0; i<number1.length;i++)
{
     total = total+number1[i];
}
console.log(total)