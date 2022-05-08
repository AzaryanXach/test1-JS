// 1. I wrote file and variable names in curly braces {} for clarity, skip them while naming

// 2. clone this repo to your pc

// 3. create a folder named { utils } in this folder with an { index.js } files in it

// 4. declare 4 variables using 4 ways allowed in JS containing values of 4 different data types in /utils/index.js

let a = 10
console.log(typeof a)
const x="string"
console.log(typeof x)
let bool=false;
console.log(typeof bool)
var undef;
console.log(undef)

// 5. declare 3 functions doing addition, subtraction and multiplication of 2 numbers using 3 ways allowed in JS in /utils/index.js

const arr=[1,5, 100];
console.log(typeof arr)
const sum=(num1, num2)=>{
    return num1+num2
}
console.log(sum(45, 50))
const mul = (num1,num2) => {
    return num1 * num2
    }
    console.log(mul(12 ,30))
    const substraction = (num1, num2) => {
        return num2 - num1
    }
    console.log(substraction(10, 40))
    const v = 50;
    const j = 25;
    const d = v / j;
    console.log(d)
    let z = (num1, num2) => {
        return num1 / num2
    }
console.log(z(50, 2))
const person={
    firstName: "Andranik",
    lastName: "Mkrtchyan",
    age: 40,
    Profession: "Network",
}
console.log(person.lastName)
const car = {
    Model: "BMW",
    color: "black"
   
}
console.log(car.color)
const city = {
    population: 2000000,
    building: 300000,
}
console.log(city.population)
const range = (num1, num2) => {
    let x = [];
    for(let i = num1; i < num2; ++i){
x.push(i);
    }
    return x;
}
console.log(range(1, 100))
carriedAdd2numbers = num1 => num2 => num1 + num2;
console.log(carriedAdd2numbers(1)(10))
carriedmultyple2numbers = num1 => num2 => num1 * num2;
console.log(carriedmultyple2numbers(25)(10))
constrange=(num1, num4)=>{
    x = [];
    x.push(i)
    
    for(let i = num1; i < num4; ++i){
        return x;
    }
}
console.log(range(1, 4))
console.log(["suren", "garush", "artut"].map((name) => name.toUpperCase()));
console.log(["martim", "sanasar", "albert"].map((name) => name.toLowerCase()));

function student(firstName, lastName, age){
    this.firstname = firstName;
    this.lastName = lastName;
    this.age = age;
}

const y = new student("Gev", "Badalyan", 37)
console.log(y.age)
const inc = num => num + 1;
let arr1 = [1, 6, 7, 10];
const newArr1 = arr1.map(inc);
console.log(newArr1)
const map = (func, arr) => {
let newarr = []
for(el of arr){
newarr.push(func(el))
}
return(newarr)
}
const filter = (func, arr) => {
    let newArr2 = [];
    for(let el of arr){
        newArr2.push(func(el))
        if(newArr2.filter === isSecureContext){
            return newArr2
        }
        else{
            nothing
        }
    }
}
