// Constant a charger a l'initialisation de la page
const btnChangeBackGroundColor = document.getElementById("btn-1");
const body = document.querySelector("body");
const mainTitle = document.getElementById("main-title");
const btnToggle = document.getElementById("btn-toggle");
const textInput = document.getElementById("user-input");
const btnHelloName = document.getElementById("btn-2");
const itemlist = document.querySelectorAll("li");

// Initialisation des event
btnChangeBackGroundColor.addEventListener("click", changeBackGroundColor);
btnToggle.addEventListener("change", hiddenTitle);
btnHelloName.addEventListener("click", helloName);
itemlist.forEach((item) => {
  item.addEventListener("change", hiddenFinishElement);
});

// Mes fonctions
function changeBackGroundColor() {
  console.log("ri");
  switch (body.style.backgroundColor) {
    case "white":
      body.style.backgroundColor = "pink";
      break;
    case "pink":
      body.style.backgroundColor = "blue";
      break;
    case "blue":
      body.style.backgroundColor = "green";
      break;
    case "green":
      body.style.backgroundColor = "purple";
      break;
    default:
      body.style.backgroundColor = "white";
  }
}

function hiddenTitle() {
  if (mainTitle.hidden === true) {
    mainTitle.hidden = false;
  } else {
    mainTitle.hidden = true;
  }
}

function helloName() {
  const nameInput = textInput.value;
  mainTitle.textContent = `Hello ${nameInput}`;
}

function hiddenFinishElement(item) {
  console.log(item);
  const label = item.currentTarget.querySelector("label");
  console.log(label);
  if (item.target.checked === true) {
    label.hidden = true;
  } else {
    label.hidden = false;
  }
}
