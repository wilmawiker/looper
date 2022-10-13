let correctAnswer;
let userGuess;
let guessCount = 0;

function setCorrectAnswer() {
  let correctAnswerInput = document.getElementById("answerInput");
  correctAnswer = Number(correctAnswerInput.value);
  correctAnswerInput.value = "";
  console.log(correctAnswer);
  let guess = prompt("Please guess a number", "1-100");
  console.log(guess);
  do {
    if (guess < correctAnswer) {
      prompt("du har gissat för lågt!");
    } else {
      prompt("du har gissat för högt!");
    }
  } while (guess !== correctAnswer);
  document.write("Good!");
}

// }

// function guess() {
//  do {
//     guess = prompt("gissa på ett nummer!");
//     if (correctAnswer < guess){

//     }
//  }

// }
