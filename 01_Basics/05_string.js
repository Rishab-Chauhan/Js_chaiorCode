const name = "rishab"
const repocount = 4
//console.log(name + repocount)
console.log(`My name is ${name} and my repo count is ${repocount}`)

// new method of decaling string is 
const name1 = new String("Rishab")
console.log(name1)
console.log(name1.length)
console.log(name1.toUpperCase())

const anothername = new String('RishabChauhan');
console.log(anothername.slice(-8,13))

const url = "https://rishabchauhan%20.com"
console.log(url.replace('%20', '-'))
console.log(anothername.trim())