function hiddenElementId(elmentId) {
  const element = document.getElementById(elmentId);
  element.classList.add("hidden");
}
function showElementId(elmentId) {
  const element = document.getElementById(elmentId);
  element.classList.remove("hidden");
}

function setBackgroundColor(elmentId) {
  const element = document.getElementById(elmentId);
  element.classList.add("bg-red-400");
}

function removeBackroundColor(colorId) {
  const colorValue = document.getElementById(colorId);
  colorValue.classList.remove("bg-red-400");
}
function removeBackroundColor1(colorId) {
  const colorValue = document.getElementById(colorId);
  colorValue.style.background = "black";
}

function getSetTextElementValue(element) {
  const elementText = document.getElementById(element);
  const elementTextInner = elementText.innerText;
  const elementPars = parseInt(elementTextInner);
  return elementPars;
}

function getTextElementId(element) {
  const elementId = document.getElementById(element);
  const elementText = elementId.innerText;

  return elementText;
}

function setElementByIdText(elmentId, value) {
  const element = document.getElementById(elmentId);
  element.innerText = value;
}

function randomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwyxz";
  const alphabetArray = alphabetString.split("");

  const random = Math.round(Math.random() * alphabetString.length);
  const alphabet = alphabetString[random];
  return alphabet;
}
