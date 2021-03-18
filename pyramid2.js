const showStars = (nbStars) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log(process.argv[3].repeat(i))
  }
}

if (process.argv.length === 2) {
  console.log('usage: node stars.js number')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}
if (process.argv[5] === '-r') {
  console.log(process.argv[3].repeat(i))
  
const nbStars = Number(process.argv[])
showStars(nbStars)