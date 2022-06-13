/* A function that gets a random quote from the localQuotes array 
(inside quotes.js) and displays it in the console */

function newQuote() {
    // Pick a random quote from localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

newQuote();