"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      searchResults = searchByTraits(people);
      break;
      default:people;
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}



// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person, data);
    return app(data);
    break;
    case "family":
    displayFamily(person, data)
    // TODO: get person's family
    break;
    case "descendants":
    displayDescendants(person, data)
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

function searchByGender(people){
  let genderSearch = prompt("male or female?");
  switch(genderSearch){
    case "male":
    let maleFound = people.filter(function(person){
      if(person.gender === genderSearch){
       let x = "First Name: " + person.firstName + "\n" + "Last Name: "+person.lastName + "\n";
       let foundPeople = x +"\n"+ "Gender: "+ person.gender;
        alert(foundPeople);
          return foundPeople;
        }
        else{
          return false; 
        }
        })
    return maleFound;
    break;
    case "female":
    let femaleFound = people.filter(function(person){
      if(person.gender === genderSearch){
        let x = "First Name: " + person.firstName + "\n" + "Last Name: "+person.lastName + "\n";
        let foundPeople = x +"\n"+ "Gender: "+ person.gender;
        alert(foundPeople);
          return foundPeople;
        }
        else{
          return false; 
        }})
        return femaleFound;
    break;
    default:
    return mainMenu(person, people);
  }
}

function searchByOccupation(people){
let occupationSearch = prompt("Please enter the occupation of the person")
let personFound = people.filter(function(person){
  if(person.occupation === occupationSearch){
    let x = "First Name: " + person.firstName + "\n" + "Last Name: "+person.lastName + "\n";
    let foundPeople = x +"\n"+ "Occupation: "+ person.occupation;
    alert(foundPeople);
    return foundPeople;
  }
  else{
    return false;
  }
})
return personFound;
}

function searchByEyeColor(people){
  let eyeColorSearch = prompt("Please enter the eye color of the person")
let personFound = people.filter(function(person){
  if(person.eyeColor === eyeColorSearch){
    let x = "First Name: " + person.firstName + "\n" + "Last Name: "+person.lastName + "\n";
    let foundPeople = x +"\n"+ "Eye color: "+ person.eyeColor;
    alert(foundPeople);
    return foundPeople;
  }
  else{
    return false;
  }
})
return personFound;
}

function searchByWeight(people){
   let weightSearch = prompt("Please enter the weight of the person (lbs.)")
let personFound = people.filter(function(person){
  if(person.weight === parseInt(weightSearch)){
    let x = "First Name: " + person.firstName + "\n" + "Last Name: "+person.lastName + "\n";
    let foundPerson = x +"\n"+ "Weight: "+ person.weight;
    alert(foundPerson);
    return foundPerson;
  }
  else{
    return false;
  }
})
return personFound;
}

function searchByHeight(people){
  let heightSearch = prompt("Please enter the height of the person (inches)")
let personFound = people.filter(function(person){
  if(person.height === parseInt(heightSearch)){
    let x = "First Name: " + person.firstName + "\n" + "Last Name: "+person.lastName + "\n";
    let foundPerson = x +"\n"+ "Height: "+ person.height + " inches";
    alert(foundPerson);
    return foundPerson;
  }
  else{
    return false;
  }
})
return personFound;
}

function searchByTraits(people) {
let searchType = promptFor("Which trait(s) would you like to search by? 'gender', 'dob', 'height', 'weight', 'eye color', 'occupation'", chars).toLowerCase();
let filterPeople = [];

switch(searchType){
    case "gender":
    filterPeople = searchByGender(people);
    break;
    case "dob":
    filterPeople = searchByDob(people);
    break;
    case "height":
    filterPeople = searchByHeight(people);
    break;
    case "weight":
    filterPeople = searchByWeight(people);
    break;
    case "eye color":
    filterPeople = searchByEyeColor(people);
    break;
    case "occupation":
    filterPeople = searchByOccupation(people);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return;
    default:
      alert("Please Enter A Correct Entry Option");
      searchByTraits(people);
      break;
  }



}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}



function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person[0].firstName + "\n";
  personInfo += "Last Name: " + person[0].lastName + "\n";
  // TODO: finish getting the rest of the information to display
  personInfo += "Gender: " + person[0].gender + "\n";
  personInfo += "Dob: " + person[0].dob + "\n";
  personInfo += "Height: " + person[0].height + "\n";
  personInfo += "Weight: " + person[0].weight + "\n";
  personInfo += "EyeColor: " + person[0].eyeColor + "\n";
  personInfo += "Occupation: " + person[0].occupation + "\n";
  alert(personInfo);
}

function displayDescendants(person, people, allDescendants = []) {
  var loopFinish = false;
  let newArray = people.filter(function (el) {
    if( (person.id == el.parents[0]) || (person.id == el.parents[1]) ) {
      allDescendants.push(el)
      return true;
    } else {
      return false;
    }
  });
  if (newArray.length > 1) {
    for (i = 0; i < newArray.length; i++) {
      displayDescendants(newArray[i], data, allDescendants);
    }
    loopFinish = true;
  } else if (allDescendants.length === 0) {
    loopFinish = true;
  }
  
  if (newArray.length >= 1) {
    displayPeople(allDescendants)
    return app(data);
  }
 
  if (loopFinish) {
    if (newArray === undefined || newArray.length === 0) {
      alert("This person has no descendants");
      return app(data);
    }
    loopFinish = false;
  }
}

function displayFamily(person, people, allFamily = []) {
  let newArray = people.filter(function (el) {
      if (person.id === el.id) {
        return false;
      } else if( ( (person.id === el.currentSpouse && el.currentSpouse !== null && person.currentSpouse !== null) ||
        person.id === el.parents[0] ||
        person.id === el.parents[1] ||
        person.parents[0] === el.id ||
        person.parents[1] === el.id ||
        (person.parents[0] === el.parents[0] && person.parents.length >= 1) ||
        (person.parents[0] === el.parents[1] && person.parents.length >= 1) ||
        (person.parents[1] === el.parents[0] && person.parents.length >= 1) ||
        (person.parents[1] === el.parents[1] && person.parents.length >= 1) ) ) {
        return true;
      } else {
        return false;
      }
  });

  if (newArray.length >= 1) {
    displayPeople(newArray);
    return app(data);
  }
}

function checkDescendants(person, people) {
  var returnNew = false;
  let newArray = people.filter(function (el) {
    if( (person.id == el.parents[0]) || (person.id == el.parents[1]) ) {
      returnNew = true;
    } else {
      returnNew = false;
    }
  });
  if (returnNew) {
    checkDescendants(person, data);
  } else {
    return newArray;
  }
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}