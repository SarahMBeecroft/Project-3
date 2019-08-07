require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require("./routes");
// Require cookie packages
var cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;
const app = express();




// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hoptoitdb");

// mongoose.Promise = global.Promise;
// if (process.env.NODE_ENV === 'test') {
//   mongoose.connect('mongodb://localhost/APIAuthenticationTEST', { useNewUrlParser: true });
// } else {
//   mongoose.connect('mongodb://localhost/APIAuthentication', { useNewUrlParser: true });
// }

app.use(cookieParser());
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));

app.use(bodyParser.json());

// Routes
// app.use('/users', require('./routes/users'));
app.use(routes);
// console.log(process.env);
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});







// module.exports = app;