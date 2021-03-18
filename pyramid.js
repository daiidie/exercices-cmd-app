const showStars = (nbStars) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log(process.argv[3].repeat(i))
  }
}

// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length === 2) {
  console.log('usage: node stars.js number')
  process.exit(1)
}

// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

// Nous somme OK, il n'y a qu'un seul argument et c'est un nombre.
const nbStars = Number(process.argv[2])
showStars(nbStars)