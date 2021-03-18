var readlineSync = require('readline-sync'); userName1 = readlineSync.question('Quel est votre Nom ? ');


var readlineSync = require('readline-sync'); userName2 = readlineSync.question('Quel est votre prénom ? ');



var readlineSync = require('readline-sync'); Age = readlineSync.question('Quel age avez vous ? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
if (Age >= 18) {
  console.log(`${userName2} ${userName1} vous êtes majeur, vous pouvez voter`)
} else {

console.log(`Désolé, ${userName2} ${userName1}, vous êtes mineur, vous ne pouvez pas voter`)

}

