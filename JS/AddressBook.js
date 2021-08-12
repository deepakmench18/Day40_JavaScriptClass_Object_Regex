let prompt = require("prompt-sync")();
let nameRegex = new RegExp("^([A-z][a-z]*){3,}")
let addressCityStateRegex =  new RegExp("^[a-z]{4,}")
let pincodeRegex =  new RegExp("^[0-9\\s]{6,7}$");
let emialRegex = new RegExp("^abc[-.+]*[0-9]*@[a-z]*[.a-z][.a-z]*")

let contacts = new Array();

class person{
    firstName ;
    lastName;
    address;
    city ;
    stste;
    zip;
    phone;
    email;

    constructor(firstName,lastName,address,city,state,zip,phone,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address =address;
        this.city = city;
        this.stste = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

function addContactIntoarray() {
    firstName =  prompt("Enter First Name: ");
    if (!nameRegex.test(firstName)){
        throw "Not Found"
    }
    lastName  = prompt("Enter Last Name: ");
    if (!nameRegex.test(lastName)){
        throw "Not Found";
    }

    address = prompt("Enter Address: ");
    city = prompt("Enter City: ");
    state = prompt("Enter State");

    if (!addressCityStateRegex.test(address) || !addressCityStateRegex.test(city) || !addressCityStateRegex.test(state)){
        throw "Not Found";
    }
    zip = prompt("Enter Zip Code: ");
    phone  = prompt ("Enter Phone Number: ")
    email = prompt("Enter Email => ");
    if (! pincodeRegex.test(zip) || emialRegex.test(email)){
        throw "Not Found";
    }
    contacts.push(new person( firstName,lastName,address,city,state,zip,phone,email));
}

let addContact = addContactIntoarray();
console.log(contacts);

// Finding Person Using There Name

let findByName = prompt("Enter Name: ");
let changeName = prompt("Enter New Name to be Changed ");
let personFoundByName = contacts.filter(element => element.firstName == findByName);
personFoundByName.findByName = changeName;


// Find Person Using There Name and Delete
let findName = prompt("Enter Perosn Name to Delete: ")
let personFoundName = contacts.filter(element => element.firstName == findName);
delete personFoundName;


// Total Number of Contact

function countNumber (totalPerosn, currentPerson){
    return totalPerosn+currentPerson;
}
let contactCount =  contacts.forEach(element).reduce(countNumber, 0 );
console.log("no of contacts in list  = "+ contactCount);

// Search Person in City or State

let inputCity = prompt("enter city: ");
let inputState = prompt ("enter state: ");

let seachArray = contacts.filter(element => element.city == inputCity || element.state == inputState);
console.log("the person from city or state are: " + seachArray);

// Get Number of Contact form City or State

let cityStateCount = seachArray.forEach(element).reduce(countNumber,0);
console.log("person from given city or state are: "+ cityStateCount);

// Sort List By Name 

contacts.sort(function (a,b){
    var nameA = a.firstName.toUpperCase(); 
  var nameB = b.firstName.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

console.log(contacts);

// Sort List By ZipCode

contacts.sort(function(a,b){
    return a.zip - b.zip;
});
console.log(contacts);