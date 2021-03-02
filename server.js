const express = require('express');
const mongoose = require("mongoose");
const path = require('path');




// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


require('./routes/html.js')(app);
require('./routes/api.js')(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);

});
