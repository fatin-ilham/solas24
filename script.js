let currentQuestion = 0;
let approval = 0;
let disapproval = 0;

function showQuestion() {
  const question = questions[currentQuestion];
  document.getElementById("question").textContent = question.text;
  
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => selectChoice(choice);
    choicesDiv.appendChild(btn);
  });

  document.getElementById("reaction").textContent = "";
  document.getElementById("next").style.display = "none";
}

function selectChoice(choice) {
  approval += choice.effects.approve || 0;
  disapproval += choice.effects.disapprove || 0;

  document.getElementById("reaction").textContent = choice.reaction;
  document.getElementById("next").style.display = "block";
}

document.getElementById("next").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  let resultText;
  if (approval > disapproval) {
    resultText = "Solas approves of you. You walk the path of wisdom and empathy.";
  } else if (disapproval > approval) {
    resultText = "Solas disapproves of your choices. You are not who he hoped you'd be.";
  } else {
    resultText = "Solas remains uncertain about you. Time will tell your true path.";
  }

  document.getElementById("question").textContent = "";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("reaction").textContent = "";
  document.getElementById("next").style.display = "none";
  document.getElementById("result").textContent = resultText;
}

// Start the quiz
showQuestion();