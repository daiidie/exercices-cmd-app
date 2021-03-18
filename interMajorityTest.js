var readlineSync = require('readline-sync'); userName1 = readlineSync.question('Quel est votre Nom ? ');

var readlineSync = require('readline-sync'); userName2 = readlineSync.question('Quel est votre prénom ? ');

const Age = process.argv[2]

if (Age >= 21) {
  console.log(`${userName2} ${userName1} vous êtes majeur, vous pouvez voter`)
} else {

console.log(`Désolé, ${userName2} ${userName1}, vous êtes mineur, vous ne pouvez pas voter`)

}

