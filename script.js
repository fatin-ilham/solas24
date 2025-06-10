const questions = [
  {
    text: "An ancient elven artifact lies in forbidden ruins. What do you do?",
    choices: [
      {
        text: "Preserve it and study it with respect.",
        effects: { approve: 20 },
        reaction: "Solas approves. 'You understand the weight of history.'"
      },
      {
        text: "Sell it to a collector for gold.",
        effects: { disapprove: 20 },
        reaction: "Solas disapproves. 'You would sell our legacy for coin?'"
      },
      {
        text: "Leave it untouched — some things should remain buried.",
        effects: { neutral: 10 },
        reaction: "Solas nods quietly. 'Perhaps you are right.'"
      }
    ]
  },
  {
    text: "A mage is imprisoned by Templars and pleads for help.",
    choices: [
      {
        text: "Free them, even if it risks conflict.",
        effects: { approve: 15 },
        reaction: "Solas approves. 'You do not flinch from injustice.'"
      },
      {
        text: "Respect the law — the mage must stand trial.",
        effects: { disapprove: 15 },
        reaction: "Solas disapproves. 'Law does not always equal justice.'"
      },
      {
        text: "Ignore them. It’s not your business.",
        effects: { disapprove: 10 },
        reaction: "Solas disapproves slightly. 'So you choose indifference.'"
      }
    ]
  },
  {
    text: "An ancient spirit offers forbidden knowledge.",
    choices: [
      {
        text: "Accept and learn.",
        effects: { approve: 10 },
        reaction: "Solas smiles. 'Curiosity is not a weakness.'"
      },
      {
        text: "Refuse — the risk is too great.",
        effects: { disapprove: 10 },
        reaction: "Solas frowns. 'You fear what you do not understand.'"
      },
      {
        text: "Destroy the spirit — it's unnatural.",
        effects: { disapprove: 20 },
        reaction: "Solas is angered. 'Ignorant and cruel.'"
      }
    ]
  }
];

let currentQuestion = 0;
let approval = 0;
let disapproval = 0;

function showQuestion() {
  const question = questions[currentQuestion];
  document.getElementById("question").textContent = question.text;
  
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  question.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => selectChoice(choice);
    choicesDiv.appendChild(btn);
  });

  document.getElementById("reaction").textContent = "";
  document.getElementById("next").style.display = "none";
  document.getElementById("result").textContent = "";
}

function selectChoice(choice) {
  approval += choice.effects.approve || 0;
  disapproval += choice.effects.disapprove || 0;

  document.getElementById("reaction").textContent = choice.reaction;
  document.getElementById("next").style.display = "block";

  // Disable buttons after choice
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(btn => btn.disabled = true);
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
    resultText = `"You have walked the fragile path of wisdom, embracing the weight of truth and the burden of empathy. Know this — your choices ripple through the Veil, shaping a future unseen. Walk carefully, for even light casts shadows."`;
  } else if (disapproval > approval) {
    resultText = `"Your steps have echoed with folly and pride, blind to the threads that bind us all. I had hoped for more — but the darkness you choose to embrace will not go unnoticed. Beware, for such roads lead to ruin and regret."`;
  } else {
    resultText = `"You stand balanced on the edge of destiny, neither condemned nor blessed. Time will unravel the truth hidden within your soul. Until then, tread lightly... for fate watches with patient eyes."`;
  }

  document.getElementById("question").textContent = "";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("reaction").textContent = "";
  document.getElementById("next").style.display = "none";
  document.getElementById("result").textContent = resultText;
}


// Start the quiz on page load
showQuestion();
