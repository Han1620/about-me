let userPoints = 0;

alert("Welcome to my guessing game.");
let user = capitalizeFirstLetter(prompt("What can I call you?"));

while (!user) {
  user = prompt("I really need your name, please give it.");
}

if (user == "Tim") {
  alert("Ugh, I knew it was you Tim.");
}
alert("Hello there " + user + "! I'm so glad you decided to visit my website!");

let quizChoice = confirm("Would you like to take my quiz?");
if (quizChoice == true) {
  alert("Cool! Lets begin!");
} else if (quizChoice == false) {
  alert(
    "Boooooooring! I'm going to ignore your answer, and start the quiz anyway..."
  );
}

function questionMusic() {
  let musicQuestion = confirm("Do I love music?");

  if (musicQuestion == true) {
    console.log("Of course I do!");
    userPoints++;
  } else {
    alert("That's cray cray, " + user + ", of course I do!");
  }
}

function questionSports() {
  let question1 = prompt("What is my favourite sport?").toLowerCase();
  let attempts1 = 3;

  while (!question1) {
    question1 = prompt("C'mon, you need to guess my favourite sport!");
  }
  while (question1 != "badminton" && attempts1 > 0) {
    question1 = prompt("Nope, try again. " + attempts1 + " attempts left.");
    attempts1--;
    if (attempts1 == 0) {
      alert("Hard luck! Let's move on...");
      break;
    }
  }
  if (question1 == "badminton") {
    console.log("Yes, I love to play badminton!");
    userPoints++;
  }
}

function questionPets() {
  let petQuestion = prompt(
    "Can you guess one of my two pet animals?"
  ).toLowerCase();
  let animalsIHave = ["cat", "dog"];
  let attempts = 3;
  let petCorrect = false;

  while (attempts > 0) {
    for (let i = 0; i < animalsIHave.length; i++) {
      if (petQuestion == animalsIHave[i]) {
        alert("Thats right, " + user + "! I love " + petQuestion + "'s!");
        userPoints++;
        attempts = 0;
        petCorrect = true;
      }
    }
    if (attempts > 0) {
      attempts--;
      petQuestion = prompt("Nope, try again! " + attempts + " attempts left!");
    }
    if (attempts == 0 && petCorrect == false) {
      alert("Hard luck! Let's move on...");
    }
  }
}

function questionHoliday() {
  let holidayQuestion = capitalizeFirstLetter(
    prompt("Try and guess one of my four favourite holiday destinations...")
  );
  let holidaysILike = ["India", "Philippines", "Greece", "Morocco"];
  let attempts = 3;
  let holidayCorrect = false;

  while (attempts > 0) {
    for (let i = 0; i < holidaysILike.length; i++) {
      if (holidayQuestion == holidaysILike[i]) {
        alert("Correct! " + holidayQuestion + " is a lovely place to visit!");
        userPoints++;
        attempts = 0;
        holidayCorrect = true;
      }
    }
    if (attempts > 0) {
      attempts--;
      holidayQuestion = capitalizeFirstLetter(
        prompt(
          "Nope, but I'm sure I would love " +
            holidayQuestion +
            ". Try again! " +
            attempts +
            " attempts left!"
        )
      );
    }
    if (attempts == 0 && holidayCorrect == false) {
      alert("Better luck next time, lets move along shall we!");
    }
  }
}

function questionAge() {
  let ageQuestion = prompt("Finally, what is my age? (You have 4 attempts)");
  let attempts1 = 4;

  while (!ageQuestion) {
    ageQuestion = prompt("C'mon, take a guess, don't be polite!");
  }
  while (ageQuestion < 27 || (ageQuestion > 27 && attempts1 > 0)) {
    attempts1--;
    ageQuestion = prompt("Nope, try again. " + attempts1 + " attempts left.");

    if (attempts1 == 0) {
      alert("Hard luck! Let's move on...");
      break;
    }
  }
  if (ageQuestion == 27) {
    alert("Correct! You have a keen eye, " + user + "!");
    userPoints++;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

questionMusic();
questionSports();
questionPets();
questionHoliday();
questionAge();

alert(
  "Thank you for taking my quiz! Congratulations! You scored " +
    userPoints +
    "/5"
);
