let questions = [];

function addQuestion(name, age, grade, city, improvment, site, pricing, rating, thoughts) {
 //create obj
  let newQuestions = {
    name: name,
    age: age,
    grade: grade,
    city: city,
    rating: rating,
    thoughts: thoughts,
    pricing: pricing,
    improvment: improvment,
    site: site
  };

 //new survey
  questions.push(newQuestions);
}

// Display survey
function displaySurvey() {
  let outputS = document.getElementById("output");
  
  if (questions.length === 0) {
    outputS.innerHTML = "Their are no items in list";
    alert("Survey Sumbited");
    return;
  }

  
  for (let i = 0; i < questions.length; i++) {
    console.log("Name: " + questions[i].name);
    console.log("Age: " + questions[i].age);
    console.log("Grade: " + questions[i].grade);
    console.log("City: " + questions[i].city);
    console.log("improvment:" + questions[i].improvment);
    console.log("pricing:" + questions[i].pricing);
    console.log("rating:" + questions[i].rating);
    console.log("site:" + questions[i].site);
    console.log("thoughts:" + questions[i].thoughts)
  }
}


function SumbitSurvey() {
  let name = prompt("Enter your name:");
  let age = prompt("Enter your age:");
  let grade = prompt("Enter your grade:");
  let city = prompt("Enter your city:");
  let improvment = prompt("Improvements?:");
  let pricing = prompt("Pricing feedback:");
  let site = prompt("Site feedback:");
  let rating = prompt("Tell us your rating:");
  let thoughts = prompt("Enter your thoughts:");
  

 
  addQuestion(name, age, grade, city, improvment, site, pricing, rating, thoughts);

  alert("Survey Sumbited");
  displaySurvey();
}

SumbitSurvey();
displaySurvey();