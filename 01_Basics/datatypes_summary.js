console.log("Hello");
// Refernece NON premitive
// Array
const hero = ["Ironman", "Batman", "Hulk"];

console.log("Array op=", hero);

// Object
myObj = {
    name: "RC",
    age: 21
}
console.log("Object op = ", myObj);

// function 
myfunction = function () {
    console.log("Function op= ", "Yo RC");
}

myfunction();


//++++++++++++++++++SOME MEMORY ALLOCATIONS+++++++++++++++++
// Stack type sin this a copy 
let myname ="Rishab"

let myanothername= myname;
myanothername = "benjamin"
console.log(myname)
console.log(myanothername)

// Heap

myuser1 = {
    name: "RC",
    email:"RC@gmail.com" 
}
myuser2=myuser1
myuser2.email="Rishab@gmail.com"
console.log(myuser1)
console.log(myuser2)

