const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Quote = require('./models/quote');
const seedDB = require('./seeds.js');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);

// seedDB();

app.get('/api', (req, res) => {
    let limit = Number(req.query.limit) || 10;
    let query = (!req.query.category) ? {} : { 'category': req.query.category };
   
    Quote
    .aggregate([
        { $match: query },
        { $project: {
            _id: 0,
            __v: 0
        }},
        { $sample: { size: limit }}
    ])
    .exec((err,quotes) => {
        if(err) return res.json(err);
        res.json({
            cnt: quotes.length,
            quotes
        });
    });
});

app.listen(3000, () => console.log('Sever started on port 3000'));