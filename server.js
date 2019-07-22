const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");

const indexRouter = require ('./routes/index');
const usersRouter = require ('./routes/users')

const passport = require('./passport')

const PORT = process.env.PORT || 3001;
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/authentication', usersRouter);

app.use(passport.initialize());
// app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connect the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/authentication", {useNewUrlParser: true});

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// module.exports = app;
