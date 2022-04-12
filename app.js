let computerChoice
let userChoice

function computerPlay () {
    const randomNumber = Math.floor(Math.random() * 3 ) + 1
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'Paper'
    }
    return computerChoice
    
}

console.log(computerPlay())



