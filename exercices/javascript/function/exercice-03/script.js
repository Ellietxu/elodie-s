sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");

function sendMessage(message, fromName, toName) {
  console.log(
    "From : " + fromName + " to : " + toName + " Message : " + message,
  );
}

sendMessage(); //pas d'argument donc undefined
sendMessage("Hello, how are you? ", "Elodie", "Gaedic"); // arguments définis donc code ok
sendMessage("Super on se voit mardi !", "Linda", "Marc"); // code ok

let contactName = "Jean";
let myName = "Ada";
let myMessage = "Je t'apprends à coder tes premières fonctions";
sendMessage(myMessage, myName, contactName); // j'ai remplacé les arguments d'origine par les variables let
