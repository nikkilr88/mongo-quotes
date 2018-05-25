const Quote = require('./models/quote');

const quotes = [
    {
        text: "Only I can change my life. No on can do it for me.",
        author: "Carol Burnett",
        category: "motivational"
    },
    {
        text: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll",
        category: "motivational"
    },
    {
        text: "You can't cross the sea merely by standing and staring at the water.",
        author: "Carol Burnett",
        category: "motivational"
    },
    {
        text: "Do not take life too seriously. You will never get out of it alive.",
        author: "Elbert Hubbard",
        category: "funny"
    },
    {
        text: "This suspense is terrible. I hope it will last.",
        author: "Oscar Wilde",
        category: "funny"
    },
    {
        text: "Go to Heaven for the climate, Hell for the company.",
        author: "Mark Twain",
        category: "funny"
    },
    {
        text: "When life gives you lemons, squirt someone in the eye.",
        author: "Cathy Guisewite",
        category: "funny"
    }
];

const seedDB = () => {
    Quote.remove({}, err => {
        if (err) console.log(err);
        console.log('DB cleared!');

        for(let quote of quotes) {
            let newQuote = new Quote({
                text: quote.text,
                author: quote.author,
                category: quote.category
            });
            Quote.create(newQuote, (err, quote) => {
                if (err) console.log(err);
                console.log('Quote created! ');
            })
        }
    });
};

module.exports = seedDB;
