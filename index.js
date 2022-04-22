const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const card = require('./card');

const getBet = () => {
    return new Promise((resolve,reject) => {
        readline.question("Place your bet \n", bet => {
            if (typeof (+bet) === "number") {
                resolve(bet);
            } else {
                reject("Please input a number");
                readline.close();
            }
        })
    })
};

const playMore = () => {
    return new Promise((resolve,reject) => {
        readline.question("Wanna play more (Yes/No)\n", ans => {
            if (ans === "Yes" || ans === "No") {
                resolve(ans);
            } else {
                reject("Wrong input option");
                readline.close();
            }

        })
    })
};

let totalBet = 0;
const main = async () => {
    const bet = await getBet();
    const ourHand = card.drawCards(2);
    console.log("You got " + ourHand.map(card => card.sign+ '-' + card.value));
    const dealerHand = card.drawCards(2);
    console.log("Dealer got " + dealerHand.map(card => card.sign+ '-' + card.value));
    const result = card.compareHandValues(ourHand, dealerHand)
    console.log(result);
    if (result === "win") {
        totalBet += +bet;
    } else if (result === "lose") {
        totalBet -= +bet;
    }
    const play = await playMore();
    if (play === "Yes") {
        main();
    } else {
        console.log("You got total " + totalBet + " chips");
        readline.close();
    }
};

main()
    .catch(e => {
        console.log(e)
    });

module.exports = {
    main,
}