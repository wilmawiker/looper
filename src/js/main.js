let correctAnswer;
let userGuess;
let guessCount = 0;

function setCorrectAnswer() {
  let correctAnswerInput = document.getElementById("answerInput");
  correctAnswer = Number(correctAnswerInput.value);
  correctAnswerInput.value = "";
  console.log(correctAnswer);
}

function guess() {
  let inputTag = document.getElementById("userInput");
  userGuess = Number(inputTag.value);
  console.log(userGuess);

  if (userGuess > correctAnswer) {
    document.getElementById("text").innerText = "för högt";
  } else {
    if (userGuess < correctAnswer) {
      document.getElementById("text").innerText = "för lågt";
    } else {
      if (userGuess === correctAnswer) {
        document.getElementById("text").innerText = "rätt";
      }
    }
  }
}
