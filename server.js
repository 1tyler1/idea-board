require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
<<<<<<< HEAD
=======

>>>>>>> 23a1d2b91560543f8428a8a74281fcd835ee5ace
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board

const connection = mongoose.connection;
connection.on('connected', () => {
<<<<<<< HEAD
  console.log('Mongoose Connected Successfully');    
}); 
=======
  console.log('Mongoose Connected Successfully');
});
>>>>>>> 23a1d2b91560543f8428a8a74281fcd835ee5ace

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
<<<<<<< HEAD
}); 

app.use(express.static(__dirname + '/client/build/'))
app.get('/', (req,res) => {
=======
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req, res) => {
>>>>>>> 23a1d2b91560543f8428a8a74281fcd835ee5ace
  res.sendFile(__dirname + '/client/build/index.html')
})

const UsersController = require('./controllers/users')
app.use('/api/users', UsersController)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
<<<<<<< HEAD
})

=======
})
>>>>>>> 23a1d2b91560543f8428a8a74281fcd835ee5ace
