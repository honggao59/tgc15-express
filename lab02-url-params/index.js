// 1. Setup express
const express = require('express');
const hbs = require('hbs');

let app = express();

// inform Express that the view engine (aka. template engine)
// which we are using is hbs
app.set('view engine', 'hbs');


app.get('/', function(req,res){
    // the first argument of render is the hbs
    // file that we want to send back to the client (or browser)
    // the .hbs extension is optional

    let luckyNumber = Math.floor(Math.random() * 100 + 1);

    // the second argument to the render func
    // takes in an object
    // the KEY is the placeholder inside hbs
    // the VALUE is whatever value to be stored inside the placeholder
    res.render('index',{
        "number": luckyNumber
    })
})

// 2. Define the routes
app.get('/hello/:name', function(req,res){
    let name = req.params.name;
    res.send("Hello " + name);
})

app.get('/add/:number1/:number2', function(req,res){
    // why req.params?
    // because Express said so
    console.log(req.params);
    let n1 = parseInt(req.params.number1);
    let n2 = parseInt(req.params.number2);
    let total = n1 + n2;
    res.send("The sum is " + total );
})



// 3. Start the server
app.listen(3000, function(){
    console.log("Server started");
})