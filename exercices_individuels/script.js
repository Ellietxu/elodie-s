function sayHello(firstName, hour) {
  if (hour >= 18) {
    let message = "Bonsoir " + firstName + " !";
    console.log(message);
  } else {
    let message = "Bonjour " + firstName + " !";
    console.log(message);
  }
}

sayHello("Beyonce", 11);
sayHello("Beyonce", 18);
sayHello("Beyonce", 17);
