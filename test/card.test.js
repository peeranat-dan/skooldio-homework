// const main = require('../index');
const card = require('../card');

describe('test compare function', () => {
    it('dealer wins', () => {
        expect(card.compareHandValues(
            [{value: "Ace", sign: "Spades", numberValue: 1},{value: "Ace", sign: "Hearts", numberValue: 1}],
            [{value: "9", sign: "Spades", numberValue: 9},{value: "King", sign: "Diamonds", numberValue: 0}]
        )).toBe("lose");
        expect(card.compareHandValues(
            [{value: "2", sign: "Spades", numberValue: 2},{value: "2", sign: "Hearts", numberValue: 2}],
            [{value: "9", sign: "Spades", numberValue: 9},{value: "King", sign: "Diamonds", numberValue: 0}]
        )).toBe("lose");
    });
    it('player wins', () => {
        expect(card.compareHandValues(
            [{value: "9", sign: "Spades", numberValue: 9},{value: "King", sign: "Diamonds", numberValue: 0}],
            [{value: "Ace", sign: "Spades", numberValue: 1},{value: "Ace", sign: "Hearts", numberValue: 1}]
        )).toBe("win");
    });
});