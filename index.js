function ranDomGenerator() {
  const alphabet = randomAlphabet();
  setElementByIdText("current-Text", alphabet);
  setBackgroundColor(alphabet);
  /*  const scoreTextId = document.getElementById("score-btn");
  const scoreText = scoreTextId.innerText;
  const scoreTextParse = parseInt(scoreTextId);
  const newScore */
}

function handlerKeyButton(event) {
  const pressedButton = event.key;
  const currentSocre = getTextElementId("current-Text");

  if (pressedButton.toUpperCase() === currentSocre.toUpperCase()) {
    console.log("you got a point");
    const scoreId = getSetTextElementValue("score-btn");
    const currentValue = scoreId + 1;
    setElementByIdText("score-btn", currentValue);

    removeBackroundColor(pressedButton);
    ranDomGenerator();
  } else {
    console.log("You missed, U get lost Point");
    const lifeButton = getSetTextElementValue("life-btn");
    const currentLife = lifeButton - 1;
    setElementByIdText("life-btn", currentLife);
    if (currentLife === 0) {
      overGame(currentSocre);
    }
  }
}

document.addEventListener("keyup", handlerKeyButton);

function overGame(alphabate) {
  removeBackroundColor(alphabate.toLowerCase());
  hiddenElementId("play-ground");
  showElementId("score");
  const totalScore = getSetTextElementValue("score-btn");
  setElementByIdText("total-Score", totalScore);
""
  const alphabet = randomAlphabet();
  // console.log(alphabet);
  // removeBackroundColor1(alphabet);

  // const alphabet = document.getElementById("current-Text");
}
/* document.querySelectorAll(".kbd").forEach((node) => {
  node.addEventListener("Keyup", function () {
    node.style.background = "black";
  });
}); */

function play() {
  hiddenElementId("home-screen");
  hiddenElementId("score");
  showElementId("play-ground");
  setElementByIdText("score-btn", 0);
  setElementByIdText("life-btn", 5);

  ranDomGenerator();
}
