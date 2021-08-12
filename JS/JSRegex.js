let prompt = require("prompt-sync")();

let firstNameRegExp = new RegExp("^[A-Z][a-z]{3}$");
let firstName = prompt("Enter First Name");
if(firstNameRegExp.test(firstName)) {
    console.log("First Name Matched");
}
else{
    console.log("Please Enter Valid Details");
}

let LastNameRegExp = new RegExp("^[A-Z][a-z]{3}$");
let LastName = prompt("Enter First Name");
if(LastNameRegExp.test(LastName)) {
    console.log("Last Name Matched");
}
else{
    console.log("Please Enter Valid Details");
}

let EmailRegExp = new RegExp("^abc[-.+]*[0-9]*@[a-z]*[.a-z][.a-z]*");
let Email = prompt("Enter Email ID");
if(EmailRegExp.test(Email)) {
    console.log("Email Matched");
}
else{
    console.log("Please Enter Valid Details");
}

let PhoneNumberRegExp = new RegExp("^[6-9][0-9]{9}$");
let PhoneNumber = prompt("Enter Phone Number");
if(PhoneNumberRegExp.test(Email)) {
    console.log("Phone Number Matched");
}
else{
    console.log("Please Enter Valid Details");
}

let pincodeRegex =  new RegExp("^[0-9]{6,6}$");
let pincode =  prompt("Enter PinCode Number");

if (pincodeRegex.test(pincode)){
    console.log("Pincode is Matched");
}
else{
    console.log("Please Enter Valid Details");
}

let pincodeRegex =  new RegExp("^[0-9]{6,6}$");
let pincode =  prompt("Enter PinCode Number");

if (pincodeRegex.test(pincode)){
    console.log("Pincode is Matched");
}
else{
    console.log("Please Enter Valid Details");
}