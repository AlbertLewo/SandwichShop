const express = require("express");  //requires (imports) the               //express package
const PORT = process.env.PORT || 5000;  //see below
const server = express();
const fs = require('fs');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.post("/api/login", (req, res) => {
    var loginExists = false
    fs.stat('details.json', function(err, stat) {
        if(err == null){
            fs.readFile('details.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } 
            else {
                obj = JSON.parse(data); //now it's an object
                for (const x of obj) { 
                    console.log(x.username)
                    console.log(x.password)

                if(x.username == req.body.username && x.password == req.body.password){
                    loginExists = true
                break
                }}

                var return_obj = {}
                console.log("value of loginExists is")
                console.log(loginExists)
                if(loginExists) {
                    return_obj = {status : 200, username: req.body.username}
                }
                else {
                    return_obj = {status: 401}
                }
                res.status(200).send(return_obj)
            }});
            }

        else if(err.code === 'ENOENT'){
            console.log("No file exists")
        }

        else {
            console.log('Some other error: ', err.code);
        }
    });
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
                } 
                
                else {
                    obj = JSON.parse(data); //now it's an object
                
                    var loginExists = false
                    for (const x of obj) { 
                        console.log(x.username)
                        console.log(x.password)

                    if(x.username == req.body.username){
                        loginExists = true
                        break
                    }
                }
            
            var return_obj = {}
            if(loginExists){
                console.log("login exists")
                return_obj = {status : 401}
            }

            else {
                obj.push(req.body) // we push the JSON object into the JSON array
                console.log(obj)
                var json = JSON.stringify(obj); //convert it back to json to write into our details.json file
                fs.writeFile('details.json', json, 'utf8', function(err) {
                if (err) throw err;
                    console.log('complete');
                }); // write it back 
            
                return_obj = {status: 200, username: req.body.username}
                // send username back 
            }
            
            res.status(200).send(return_obj);
        }});
    } 
    
    else if(err.code === 'ENOENT') {
        // file does not exist
        // first create an empty array and push the data we get from frontend into the array
        // this is necessary so we can use the obj.push function on line 28 -> JSON files are structured with square brackets outside
        // then curly brace json OBJECTS inside
        var arr = []
        arr.push(req.body)
        fs.writeFile ("details.json", JSON.stringify(arr), function(err) {
    
        if (err) throw err;
            console.log('complete');
        });
        } 

        else {
            console.log('Some other error: ', err.code);
        }
    }); 
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
    } 
    
    else {
        console.log('Some other error: ', err.code);
    }
    }); 

    res.status(200).send("Contact Submit!");
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));