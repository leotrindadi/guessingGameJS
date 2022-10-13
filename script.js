
let maximum = parseInt(prompt("Enter the maximum value!"));
while (!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let validAttempts = parseInt(prompt("How many chances you want?"));


let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;


while (parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    attempts++;

    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess.")
    } else {
        guess = prompt("Too low! Enter a new guess.")
    }

    if(attempts > validAttempts) {
        guess = prompt("You have failed!")
        break;
    } 
}

if (guess === 'q') {
    console.log("Ok, you quit!")
} 

else if (attempts > validAttempts){
    console.log("Refresh the page.")
}

else {
    console.log("Congrats! YOU WIN!")
    console.log(`It took you ${attempts} guesses`)
}
