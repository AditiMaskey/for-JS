console.log("This is the first line");

// document.write("This is what I know about JS.");

//Variable

//var: Don't use it
//let:Most 2nd 
//const: Most used

let firstName = "Dikshya";
let age = 23;
const job = "Employed"; 

console.log(job, age);

console.log("My status is " + job);

console.log("I am", age);


console.log(`My name is ${firstName}. I am ${age} years old and I am ${job}!!`);

// job = "unemployed";

age = 30;

console.log("The job is:", job);

console.log("Age:", age);


// console.log(undeclared);

// var undeclared = "Something";

// let undeclared = "Something";


// Assignment for ya!!!

const fName = document.getElementById("name").value;

const email = document.getElementById("email").value;

const printDatas = () => {


    console.log("The name is:", fName);
    console.log("The email address is " + email);
    
    //    document.write(fName);
    //    document.write(email);
}


const clearAll = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}