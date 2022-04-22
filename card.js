const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const signs = ["Clubs", "Diamonds", "Hearts", "Spades"];

const createDeck = () => { // create deck of 52 cards, create for flexibility of changing number of cards in deck
    let deck = [];
    signs.forEach(sign => {
        values.forEach(value => {
            deck.push({value, sign});
        });
    });
    return deck;
};

const drawCards = (n) => { // function to randomly draw card
    let cards = [];
    for (let i = 0; i < n; i++) {
        const random = Math.floor(Math.random() * 51);
        const deck = createDeck();
        const cardValue = deck[random].value;
        const cardSign = deck[random].sign;
        let cardNumberValue;
        if (cardValue === "Ace") {
            cardNumberValue = 1;
        } else if (cardValue === "10" || cardValue === "Jack" || cardValue === "Queen" || cardValue === "King") {
            cardNumberValue = 0;
        } else {
            cardNumberValue = +cardValue;
        }
        cards.push({value:cardValue, sign:cardSign, numberValue: cardNumberValue});
    }
    return cards;
};

const compareHandValues = (hand1, hand2) => {
    let hand1Values = 0;
    let hand2Values = 0;
    for (let i = 0; i < hand1.length; i++) {
        hand1Values += hand1[i].numberValue;
        hand2Values += hand2[i].numberValue;
    }
    if (hand1Values > 9) {
        hand1Values -= 9;
    }
    if (hand2Values > 9) {
        hand2Values -=9;
    }
    if (hand1Values > hand2Values) {
        return "win";
    } else if (hand1Values === hand2Values ) {
        return "tie";
    } else {
        return "lose";
    }
};

module.exports = {
    drawCards,
    compareHandValues
};