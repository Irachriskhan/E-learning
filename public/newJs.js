//Function declaration ONE
let functionName = function(x, y, z){
    let result = x + y + z;
    return result;
};
console.log(functionName(30, 18, 7));

// ---------------------------------------------------
//Function declaration TWO
function addTwoNumbers(firstN, secondN){
    let result = firstN + secondN;
    return result;
}

console.log(addTwoNumbers(15, 80));

// ---------------------------------------------------
//Function declaration THREE
const subtraction = (x, y) => {
    let result = x - y;
    return result;
}
console.log(subtraction(60, 25));


division = (number1, number2) => {
    let result = number1 / number2;
    return result;
}
console.log(division(40, 10));




// NESTED FUNCTIONS
let guteranya = function(x, y, z){
    let result = x + y + z; // 55

    let gukuba = function(factor){
        let vyoseBikuvye = result * factor; //275
        return vyoseBikuvye;
    };
    console.log(gukuba(10)); // Output 550
};

console.log(guteranya(30, 18, 7)); // input

// CALL STACK
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

// CALL STACK -- New update
function addition(n1, n2){
    let answer = n1 + n2;
    return () => answer;
}

let add1 = addition(10, 20);
let add2 = addition(30, 40);

console.log(add1());
console.log(add2());

//  CALL STACK -- LAST update
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10

function addition(n1, n2){
    return answer => answer + n1 + n2;
}

let add3 = addition(10, 20);
let add4 = addition(30, 40);

console.log(add3(10));
console.log(add4(10));

// RECURSION EASY STEP
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1); 
// 2 * power(2, 3) // 16
// 2 * power(2, 2) // 8
// 2 * power(2, 1) // 4
// 2 * power(2, 0) // 2
// power = 1
	}
}
console.log(power(2, 4));


function factorial(n){
    if (n == 1 || n == 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output 120

let n = 5;
let result = 1;
while(n >= 1){
    result = result * n; // 5,20,60,120
    n -= 1; // 4,3,2,1
}
console.log(result) 

// RECURSION HARD STEP
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

// ========================================================================
// CHAPTER 4: Objects and Arrays
// 4.1 DATA SETS
/*A data structure is a specialized format for organizing, processing, retrieving 
and storing data.
An array is written as a list of values between square
brackets, separated by commas.
*/

let listOfNumbers = [2, 3, 5, 7, 11];
let myStuff = ["computer", 791615454, "mouse", true];

console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

let myString = "Hello";
myString.length // length is a PROPERTY
Math.max(23, 67, 89)
console.log(myString); // console is an OBJECT (which is a collection of constants and functions).

// THERE ARE TWO WAYS OF REpresenting a PROPERTY

 myString.length  // the word after the dot is the literal name of the property
 myString["length"]; // tries to evaluate the expression length and uses the result, converted
                    //to a string, as the property name

// 4.3 METHODS
Math.max()
Math.min()
console.log()
myClassAges()

/*
Properties that contain functions are generally called methods of the value
they belong to. example:
*/
myString.toUpperCase // toUpperCase is a method of a string
let sequence = [1, 2, 3];
sequence.push(4, 34, 6); // The push method adds values to the end of an array
console.log(sequence); // 1, 2, 3, 4, 34, 6
sequence.pop(); // pop methodremove the last value in the array and returning it
console.log(sequence); // 1, 2, 3, 4, 34 

// 4.4 OBJECTS
// Values of the type object are arbitrary collections of properties
let sunday = {
  sadiki : ["Kwiga", 78345674, 'break'],
    nina : ["kuraba movies", "chat"],
    gad : "hacking"
};

console.log(sunday.sadiki); // [ "Kwiga", 78345674, "break" ]


// Add arrays in an object
let journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"], 
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts", "beer"], 
        squirrel: true
    },
    /* and so on... */
];

console.log(journal[1]);


let xyz = {
    aba : "Hello",
    34 : "Age",
    book : [23, 45, 67, 89]
}

console.log(xyz);
Object.assign(xyz, {border: ['Hi', 89, true]}); // Add border property in xyz object
console.log(xyz); 

//  4.5 MUTABILITY

/*
    The types of values such as numbers, strings, and Booleans, are all immutable
    It is impossible to change values of those types.
    You can combine them and derive new values from them, but when you take a specific string value, that value
    will always remain the same. The text inside it cannot be changed.
*/

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

const score = {visitors: 0, home: 0}; 
console.log(score); // OUTPUT: Object { visitors: 0, home: 0 }
score.visitors = 1;
console.log(score); // OUTPUT: Object { visitors: 1, home: 0 }
score = {visitors: 1, home: 1}; // ERROR : invalid assignment to const 'score'


// 4.6 THE LYNANTHROPE'S LOG


function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));
// → 0.068599434

// COMPUTING CORRELATION

/*
    Arrays have an includes method that checks whether a given value exists in
    the array. The function uses that to determine whether the event name it is
    interested in is part of the event list for a given day.
    The body of the loop in tableFor figures out which box in the table each
    journal entry falls into by checking whether the entry contains the specific event
    it’s interested in and whether the event happens alongside a squirrel incident.
    The loop then adds one to the correct box in the table.
*/
let JOURNAL = [
  {"events":["pizza","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false}
];

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL));
// → [ 3, 1, 0, 0 


// OBJECT EXTENSION

if ("person6" in myPeople) console.log(myPeople.person6);
else{
	Object.assign(myPeople, {person6 : "Claude"});
	console.log(myPeople);
}

if ("person5" in myPeople){
    myPeople.person5 = "Ghad"
    console.log(myPeople.person5);
}else{
    Object.assign(myPeople, {person5 : "Ghad"});
    console.log(myPeople);
}

myStuff = ["computer", "power", "tables"]
myStuff.push("screen", "Keyboard", "cables", "projector");
for (let i = 0; i < myStuff.length; i++) {
    let entry = myStuff[i];
    if (entry == "router") {
        console.log("The router already exists!");
        break;
    }
}
myStuff.push("router");
console.log(myStuff);

// FURTHER ARRAYOLOGY
myStuff.pop(); // Remove the last value
myStuff.push("Radio"); // Add  at the end the value
myStuff.shift(); // Remove the first value
myStuff.unshift("Computer"); // Add the value at the beginning
console.log(myStuff); // Print the array
myStuff.slice(1, 4); // Print the values from index 1 to 3 only
let extendedArray = myStuff.concat(myStuff); // concatinate myStuff again

// STRINGS AND THEIR PROPERTIES

// split() breaks the string at the occurence of a blank space
console.log("coconut are delicious fruits".split(" "));
// OUTPUT: [ "coconut", "are", "delicious", "fruits" ]
// trim() removes blank spaces at the start and end of a string
console.log("   coconut are delicious fruits  ".trim());
// OUTPUT: "coconut are delicious fruits"
let name = "coconut are delicious fruits";
let name2 = name.split(" ");
console.log(name2.join(" - ")); // Join splited string
// OUTPUT: coconut - are - delicious - fruits
console.log(name.repeat(2)); // Repeat the variable name
// OUTPUT: coconut are delicious fruitscoconut are delicious fruits

// REST PARAMETERS
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// OUTPUT: 9
// console.log(Math.max(4, 1, 9, -2)); // OUTPUT: 9

for (let element of myStuff){
	if(element == "router") {
		console.log(element, " is there.");
		break;
	}
}
console.log("Thank you!");
/*
OUTPUT
    router is there. 
    Thank you!
*/


// ------------------------------------------------------------------
//  CHAPTER 5: Higher-Order Functions

//5.2 ABSTRACTION REPETITION
for (let i = 0; i < n; i++) {
        console.log(i);
    }

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

// THIS object
// this reference the object that is executing the current function
// If the function is part of the object, we call it method
// method -> object
// if the function is a method in an object, this reference
//the object itself
// otherwise if the function is a regular function (not part of object)
//this reference to the global object in browser and global in node
// function -> global (window, global)
const video = {
    title: "KIdalipo.mp4",
    play(){ // play is a method, video is an object
        console.log(this);// this reference to this object itself
    }
};

// OUTPUT
/*
Object { title: "KIdalipo.mp4", play: play() }
play: function play()
title: "KIdalipo.mp4"
*/

video.play(); 
 video = {
    title: "KIdalipo.mp4",
    play(){ // play is a method, video is an object
        console.log(this);// this reference to this object itself
    }
};

video.stop = function(){ // this is a method
    console.log(this);
};

video.stop(); // calling the stop method
// OUTPUT: Object { title: "KIdalipo.mp4", play: play(), stop: stop() }