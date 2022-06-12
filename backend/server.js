const express = require("express");  //requires (imports) the               //express package
const PORT = process.env.PORT || 5000;  //see below
const server = express();
const fs = require('fs');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/api/hello", (req, res) => {
    res.status(200).send("Hello World!");
   });

server.post("/api/login", (req, res) => {
    console.log(req.body)
    res.status(200).send("Login API!");
});

server.post("/api/signup", (req, res) => {
    console.log("Signup")
    console.log(req.body)
    fs.stat('details.json', function(err, stat) {

    if(err == null) {
        console.log('File exists');
        fs.readFile('details.json', 'utf8', function readFileCallback(err, data){

    if (err){
        console.log(err);

    } else {
        obj = JSON.parse(data); //now it's an object
        obj.push(req.body) // we push the JSON object into the JSON array
        console.log(obj)
        var json = JSON.stringify(obj); //convert it back to json to write into our details.json file
        fs.writeFile('details.json', json, 'utf8', function(err) {

    if (err) throw err;
        console.log('complete');
        }
        ); // write it back 
    }});
    
    } else if(err.code === 'ENOENT') {
    // file does not exist
    // first create an empty array and push the data we get from frontend into the array
    // this is necessary so we can use the obj.push function on line 28 -> JSON files are structured with square brackets outside
    // then curly brace json OBJECTS inside
        var arr = []
        arr.push(req.body)
        fs.writeFile ("details.json", JSON.stringify(arr), function(err) {

    if (err) throw err;
        console.log('complete');
        }
    );

    } else {
        console.log('Some other error: ', err.code);
        }
    }); 

    res.status(200).send("Signed Up!");
});


server.post("/api/contact", (req, res) => {
    console.log(req.body)
    console.log("Form Submitted :)")
    fs.stat('contact.json', function(err, stat) {

    if(err == null) {
        console.log('File exists');
        fs.readFile('contact.json', 'utf8', function readFileCallback(err, data){

        if (err){
            console.log(err);

        } else {
            obj = JSON.parse(data); //now it's an object
            obj.push(req.body) // we push the JSON object into the JSON array
            console.log(obj)
            var json = JSON.stringify(obj); //convert it back to json to write into our details.json file
            fs.writeFile('contact.json', json, 'utf8', function(err) {

    if (err) throw err;
        console.log('complete');
        }
        ); // write it back 
    }});
    
        } else if(err.code === 'ENOENT') {
        // file does not exist
        // first create an empty array and push the data we get from frontend into the array
        // this is necessary so we can use the obj.push function on line 28 -> JSON files are structured with square brackets outside
        // then curly brace json OBJECTS inside
            var arr = []
            arr.push(req.body)
            fs.writeFile ("contact.json", JSON.stringify(arr), function(err) {

    if (err) throw err;
        console.log('complete');
        }
    );

    } else {
        console.log('Some other error: ', err.code);
        }
    }); 

    res.status(200).send("Contact Submit!");
});



server.post("api/cartupdate", (req, res) => {
    //
});


server.listen(PORT, () => console.log(`listening on port ${PORT}`));