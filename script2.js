//Question 1//
var  FirstName = "Ruchi";
console.log(FirstName);


var age = 18;
console.log(age);

//Question 2//
//String//
let Username = "Ruchi";
console.log(Username);
//Number//
let age2 = 4965
console.log(age2);
//Boolean//
let grade = false;
console.log(grade);
//Undefined//
let house; 
console.log(house);
//Null//
let house2 = null;
console.log(house2);


//Question 3//
var RollNumber = 15;
if (RollNumber > 10) {
    console.log("RollNumber is greater than 10");
}

//Question 4//
let isMember = true;
if (isMember) {
    console.log("Member discount applied.");
}

//Question 5//
let startValue = 50;
if (startValue > 0) {
    console.log("The start value is positive.");
} else if (startValue < 0){
    console.log("The start value is negative.");
} else{
    console.log("The start value is zero.");
}

//Question 6//
let a = 10;
let b = 20;
console.log("a == b:", a == b);
console.log("a === b:", a ===b);
console.log("a != b:", a != b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);


//Question 7//
let firstName = "Ruchi";
let lastName = "Naware";
let myAge = 18;
console.log("Hello," + firstName +" "+ lastName +", you are" + myAge + "years old.");

//Question 8//
let num = 50;
if (num > 0 && num < 100) {
    console.log("The number is within range.");
}

// Question 9//
let hasCar = true;
let hasLicense = true;
let hasInsurance = true;
if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");
}

//Question 10//
let numberToCheck = 21;
if (numberToCheck % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Question 11//
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}