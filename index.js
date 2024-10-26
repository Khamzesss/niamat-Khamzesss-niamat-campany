const correctAnswers = ["114", "Адам (1алейх1и-с-салям)", "Сура Ар-Каусар" ,"Сура Аль-Бакъара", "В пещере Хира"];

// function checkAnswer(button) {
// const selectedAnswer = button.textContent;
// if (selectedAnswer === "Не знаю, но хочу знать.") {
// button.style.backgroundColor = "#0076fe";
// } else if (correctAnswers.includes(selectedAnswer)) {
// button.style.backgroundColor = "green";
// } else {
// button.style.backgroundColor = "red";
// }
// }

function checkAnswer(button) {
  const selectedAnswer = button.textContent;
  if (selectedAnswer === "Не знаю, но хочу знать.") {
  const correctAnswerButton = Array.from(button.parentElement.children).find(child => correctAnswers.includes(child.textContent));
  correctAnswerButton.style.backgroundColor = "green";
  } else if (correctAnswers.includes(selectedAnswer)) {
  button.style.backgroundColor = "green";
  } else {
  button.style.backgroundColor = "red";
  }
  }


// Mobile adaptation
const options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", function () {
    option.style.padding = "20px 3px";
  });
});
//     /* Если ты зашел сюда и решил взять код, то я дарю его тебе. Хьанал хуьйла! */
