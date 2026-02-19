// function sayHello(firstName, hour) {
//   if (hour >= 18) {
//     let message = "Bonsoir " + firstName + " !";
//     console.log(message);
//   } else {
//     let message = "Bonjour " + firstName + " !";
//     console.log(message);
//   }
// }

// sayHello("Beyonce", 11);
// sayHello("Beyonce", 18);
// sayHello("Beyonce", 17);

let firstName = prompt("Quel est ton prénom?");
let hour = prompt("Dans quelle heure somme-nous entre 0 et 24?");

function sayHello(firstName, hour) {
  if (hour >= 18) {
    let message = "Bonsoir " + firstName + " !";
    document.querySelector("h1").innerText = message;
  } else {
    let message = "Bonjour " + firstName + " !";
    document.querySelector("h1").innerText = message;
  }
}

sayHello(firstName, hour);
