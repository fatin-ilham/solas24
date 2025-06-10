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
