require('dotenv').config();

// Database setup
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;
// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});
// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("Connected to MongoDB!");
});

// Pull in Models from the `schema.js`
var Schema = require("./schema.js");

var UserModel = Schema.UserModel;
var IdeaModel = Schema.IdeaModel;

// Delete all Companies from the database
UserModel.remove({}, function (err) {
    console.log(err);
});

// Create some Companies and Ideas
const Ashley = new UserModel({ name: 'Burton', country: 'US' })
const Lauren = new UserModel({ name: 'DC', country: 'US' })
const Payton = new UserModel({ name: 'K2', country: 'Canada' })

const Travel = new IdeaModel({ name: 'Little Idea', price: 123.45 })
const Business = new IdeaModel({ name: 'Big Idea', price: 123.45 })
const  = new IdeaModel({ name: 'Blue Idea', price: 123.45 })

// Here we assign some Ideas to each User.
const companies = [burton, dc, ktwo]
const Ideas = [littleIdea, bigIdea, blueIdea]

companies.forEach((User) => {

    User.Ideas = Ideas

    User.save()
        .then((User) => {
            console.log(`${User.name} saved!`)
        })
        .catch((error) => {
            console.log(error)
        })
});

// Disconnect from database
db.close();