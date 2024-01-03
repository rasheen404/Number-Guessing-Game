//NUMBER GUESSING GAME



const text = document.getElementById("text");
const button = document.getElementById("Guess");
const invalid = document.getElementById("invalid");
const correct = document.getElementById("correct");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running)
{
    button.onclick = function()
    {
        guess = text.value;
        guess = Number(guess);

        if(isNaN(guess) || guess > 100 || guess <1)
        {
            window.alert("Please enter a valid Number");
        }

        else
        {
            attempts++;
            if(guess > answer)
            {
                invalid.textContent = `Too High..! Try again`;
            }
            else if(guess < answer)
            {
                invalid.textContent = `Too Low..! Try again`;
            }
            else{
                correct.textContent = `CORRECT! The answer is ${answer}. you took ${attempts} attemps`;
            running = false;
            }
        }
   



    running = false;
    }   
}