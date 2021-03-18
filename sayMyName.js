const name = process.argv[2]
if (isNaN(process.argv[2])) {
  console.log(`My name is, ${name}.`)

} else { console.log(`Error: ${process.argv[2]} is not a string.`)
process.exit(1) }