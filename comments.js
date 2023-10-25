// Create web server

// Import express
const express = require("express");
const app = express();
const port = 3000;
// Import module body-parser
const bodyParser = require("body-parser");
// Import module mongoose
const mongoose = require("mongoose");
// Import module method-override
const methodOverride = require("method-override");
// Import module express-sanitizer
const expressSanitizer = require("express-sanitizer");

// Connect to database
mongoose.connect("mongodb://localhost:27017/comments_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Set view engine
app.set("view engine", "ejs");
// Set static folder
app.use(express.static("public"));
// Set body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// Set method-override
app.use(methodOverride("_method"));
// Set express-sanitizer
app.use(expressSanitizer());

// Create schema
const commentSchema = new mongoose.Schema({
