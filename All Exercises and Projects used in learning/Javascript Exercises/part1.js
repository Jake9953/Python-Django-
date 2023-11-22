var firstName = prompt("First Name Please: ")
var secondName = prompt("Second Name Please: ")
var age = prompt("Your age Please: ")
var height = prompt("What is your height? ")
var petName = prompt("What is your pet`s name? ")
alert("Thank you so much for the information!")

// The four conditions

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// name condition

if (firstName[0] === secondName[0]) {
  nameCond = true;
}
else {
  nameCond = false;
}

// age condition

if (age > 20 && age < 30) {
  ageCond = true;
}
else {
  ageCond = false;
}

// height condition

if (height >= 170) {
  heightCond = true;
}
else {
  heightCond = false;
}

// pet name

if (petName[petName.length - 1] === "y") {
  petCond = true;
}
else {
  petCond = false;
}

// check all conditions are true

if (nameCond && ageCond && heightCond && petCond) {
  console.log("Welcome Spy!");
}
else {
  console.log("Nothing to here Silly!");
}