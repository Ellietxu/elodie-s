// ETAPE 1

function askNumber() {
  const givenNumber = Number(prompt("Give me a number please :"));
  return givenNumber;
}

// ETAPE 2

function didIWin(givenNumber) {
  if (givenNumber === 22) {
    alert("Bravo !!! Vous avez deviné !");
  } else if (givenNumber > 22) {
    alert("Plus petit ");
  } else {
    alert("Plus grand ");
  }
}

function gamePlay() {
  let win = false;
  while (win !== true) {
    let givenNumber = askNumber();
    win = didIWin(givenNumber);
  }
}

gamePlay();
