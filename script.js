// Dette er en vanlig funksjon:
function bob() {
    return "jamaican me crazy"
}

console.log(bob())
// Dette er en arrow funksjon:
const marley = () => {
    return "jamaican me crazy"
}

console.log(marley())
// Dette er en arrow funksjon, forkortet uten "{}" og "return":
// kan gjøres hvis kun det er en enkelt linje med kode etter "=>".
const something = () => "jamaican me crazy"

console.log(something())

// funksjon som returnerer variabel verdien som er inne i funksjonen.
function returnsTheSame() {
    let etArray = ["fire", "fem", "seks"]
    return etArray
}

console.log(returnsTheSame())



// funksjon med parameter:
function greeting(name) {
    return `Hello ${name}`
}

console.log(greeting("Joakim"))


//! Ikke en god måte å gjøre console.log på! Dette gjør at funksjonen ALLTID konsoll logger og ikke gjør noe annet!
function anotherGreeting(name) {
    return console.log(`Hello ${name}`)
}

anotherGreeting("Joakim")


let numOne = 2
let numTwo = 4

function add() {
    return numOne + numTwo
}

console.log(add())

function betterAdd(numOne, numTwo) {
    return numOne + numTwo
}

console.log(betterAdd(14, 3))


function subtract(numOne, numTwo) {
    return numOne - numTwo
}

console.log(subtract(7, 5))

function multiply(num1, num2) {
    return num1 * num2
}

console.log(multiply(3212, 700));

function divide(num1, num2) {
    return num1 / num2
}


console.log(divide(3212, 210));
// bruker toFixed for å fjerne noen av desimalene:
// floats (tall med desimaler) blir gjort om til STRINGS når man bruker toFixed. 
let numTofixedThree = divide(3212, 210).toFixed(3)
// Vi bruker parseFloat for å gjøre svaret tilbake til floats!
console.log(parseFloat(numTofixedThree))


function getRandomNumberBetween1And10() {
    return Math.ceil(Math.random() * 10)
}

console.log(getRandomNumberBetween1And10())

// funksjon som genererer et tilfeldig tall mellom 0 og max:
function getRandomNumberWithPara(max) {
    return Math.round(Math.random() * max)
}

console.log(getRandomNumberWithPara(6))
console.log(getRandomNumberWithPara(100))

let exampleArray = [1765, 122, 4323, 8764, 35, 8766, 227, 18, 99, 210]
function randomIndex() {
    return Math.floor(Math.random() * exampleArray.length)
}

console.log(randomIndex())
console.log(exampleArray[randomIndex()])
console.log(exampleArray[0])

let exampleArrayTwo = [765, 22, 323, 764, 5, 766, 27, 8, 9, 10]

function flexibleRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

console.log(flexibleRandomIndex(exampleArray))
console.log(flexibleRandomIndex(exampleArrayTwo))

console.log(exampleArray[flexibleRandomIndex(exampleArray)])
console.log(exampleArrayTwo[flexibleRandomIndex(exampleArrayTwo)])

// Funksjon som gir tilbake et tilfeldig kompliment fra en liste av komplimenter
function giveCompliment() {
    const compliments = [
        "Du er fantastisk!",
        "Du er en stjerne!",
        "Du gjør verden lysere!",
        "Du er en superhelt!",
        "Du er den beste!",
    ];
    const randomIndex = Math.round(Math.random() * (compliments.length - 1));
    const kompliment = compliments[randomIndex];
    return kompliment;
}

// Logger et tilfeldig kompliment
console.log(giveCompliment());

console.log(giveCompliment())

// % operator: sjekker hva SOM BLIR IGJEN etter man har delt et tall med et annet:
// 10 % 3 = 1 rest
console.log(10 % 3);
// 11 % 3 = 2 rest
console.log(11 % 3);
// 12 % 3 = 0 rest
console.log(12 % 3);

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} er et partall`
    } else {
        return `${number} er et oddetall`
    }
}

console.log(evenOrOdd(3))

console.log(1 === 1)
console.log(1 === "1")
console.log(1 == "1")
console.log(1 == "1")
console.log(1 !== "1")