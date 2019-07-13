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

// Display Characters
app.get("/api/tables", function(req,res){
    return res.json(tables);
});

app.get("/api/waitlist", function(req,res){
    return res.json(waitList);

});


//Create characters - takes in JSON input

app.post("/api/tables", function(req,res){
    var newTable = req.body;

    console.log(newTable);

    if (tables.length < 5) { 
        tables.push(newTable);
        res.json(true);
    } else { 
        waitList.push(newTable);
        res.json(false);
    }
});

//Start the server to begin listening 
app.listen(PORT, function(){
    console.log("app listening on PORT" + PORT);
});
