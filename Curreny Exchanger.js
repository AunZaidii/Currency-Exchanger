const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function currencyex(amount, rate){
    return amount * rate;
}

rl.question("Enter primary currency: ", function(currencyOne){
    rl.question("Enter exchange rate: ", function(exchangeRate){
        currencyOne = parseFloat(currencyOne); 
        exchangeRate = parseFloat(exchangeRate); 
        const currencyTwo = currencyex(currencyOne, exchangeRate);
        console.log("Your exchanged currency is", currencyTwo);
        rl.close();
    });
});
