//CRUDE OPERATION IN JS

let a =10
console.log(typeof(a))

let b = 10.00
console.log(typeof(b))

let c = 'Rushi'
console.log(typeof(c))

let S = "Jankar"
console.log(typeof(S))


//retrive 

//update

//add 

//delete


let details =["Rushi","Jankar",25,3];

let info= {
    FirstName : "Rushi",
    LastName :"Jankar",
    age :25,
    year :3,
}

//retrive  //dot and bracket notation
console.log(info.FirstName)
console.log(info['FirstName'])

//update //dot and bracket notation
info.FirstName = "Ram"
info['FirstName'] ="Remo"
console.log(info)

//add //dot and bracket notation
info.city ="Pune"
info['ADDRESS'] ="bHOOM"
console.log(info)

//delete  //dot and bracket notation
delete info.city;
delete info['FirstName']
console.log(info)




//////////programm2
console.log("-----------------------PROGRAM2----------------")

let human ={
    color : " white",
    height : "6ft",
    name : "Suraj",
}

///retrive 
console.log(human.height)
console.log(human['name'])

/// add
human.disable = "no"
human['dream'] =" Army"
console.log(human)
//update

human.height = "7ft"
human['color'] = "black"
console.log(human)

//delete

delete human.height;
delete human['weight'];

console.log(human)


// vehicle

let cars = {
    Brandname : "Suzuki",
    carcolor : "red"
}

//retrive dot and bracket notation
console.log(cars.Brandname);
console.log(cars['Brandname'])
//add
cars.type = "xuv";
cars['power'] = "400hp";
console.log(cars)

//update
cars.power = "900hp";
cars['type'] = "6 seater";
console.log(cars)

//delete

delete cars.Brandname;
delete cars['type'] ;
console.log(cars)