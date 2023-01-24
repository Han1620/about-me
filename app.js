let userPoints = 0;

//welcome message

alert("Welcome to my guessing game.");
let user = prompt("What can I call you?");

//below ensures the user actually gives their name
while (!user) {
  user = prompt("I really need your name, please give it.");
}

//reference to particular name: Hannah
if (user == "Hannah") {
  alert("Ugh, I knew it was you Hannah.");
}
alert("Hello there " + user + "! I'm so glad you decided to visit my website!");

//option to opt out
let quizChoice = confirm("Would you like to take my quiz?");
if (quizChoice == true) {
  alert("Cool! Lets begin!");
} else if (quizChoice == false) {
  alert("Boooooooring!");
}

function questionSport() {
  //first question HELP GETTING HARD LUCK MESSAGE WITHOUT NICE WORK
  let question1 = prompt("What is my favourite sport?");
  let attempts1 = 3;

  while (!question1) {
    question1 = prompt("C'mon, you need to guess my favourite sport!");
  }
  while (question1 != "badminton" && attempts1 > 0) {
    question1 = prompt("Nope, try again. " + attempts1 + " attempts left.");
    attempts1--;
    if (attempts1 == 0) prompt("Hard luck! Let's move on...");
  }
  if ((question1 = "badminton")) {
    console.log("Nice work " + user + "!");
  }
}

//second question HELP NEEDED FOR ANSWER
function questionPet() {
  let petQuestion = prompt(
    "Can you guess one of my pet animals?"
  ).toLowerCase();
  let attempts = 3;

  let animalsIHave = ["cat", "dog"];

  while (petQuestion != animalsIHave.length && attempts > 0) {
    attempts--;

    petQuestion = prompt("Nope, try again! " + attempts + " left!");
  }
  console.log("Nice work " + user + "!");
}

// switch (colour.toLowerCase()) {
//   case "red":
//     console.log("Your favourite colour was red. Gross.");
//     break;
//   case "green":
//     console.log("Nice. Good choice.");
//     break;
//   default:
//     console.log(
//       "Pretty sure that colour doesn't exist. Have you thought about red or green? ¯\\_(ツ)_/¯"
//     );
// }

questionSport();
questionPet();
