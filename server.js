// Dependencies
var express= require("express");
var path = require("path");


//Set up Express App 
var app = express();
var PORT = 3000;


//Sets up the Express app the handle data 
app.use(express.urlenconded({ extended: true}));
app.use(express.json());


//Characters data
var tables = [];
var waitList= [];


//Routes 

//Basic route that send the user first to the AJAX page 
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname, "tables.html"));

});

app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "waitlist.html"));

});



