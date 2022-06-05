const express = require("express");  //requires (imports) the               //express package
const PORT = process.env.PORT || 5000;  //see below
const server = express();
const fs = require('fs');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/api/hello", (req, res) => {
    res.status(200).send("Hello World!");
   });

server.get("/api/login", (req, res) => {
    res.status(200).send("Login API!");
});

server.post("/api/signup", (req, res) => {
    console.log("Signup")
    console.log(req.body)
    var obj = {
        table: []
     };     
    fs.stat('details.json', function(err, stat) {
        if(err == null) {
            console.log('File exists');
            fs.readFile('details.json', 'utf8', function readFileCallback(err, data){
                if (err){
                    console.log(err);
                } else {
                obj = JSON.parse(data); //now it's an object
                obj.table.push(req.body)
                console.log(obj)
                var json = JSON.stringify(obj); //convert it back to json
                fs.writeFile('details.json', json, 'utf8', callback); // write it back 
            }});

        } else if(err.code === 'ENOENT') {
            // file does not exist
            fs.writeFile ("details.json", JSON.stringify(req.body), function(err) {
                if (err) throw err;
                console.log('complete');
                }
            );
            
        } else {
            console.log('Some other error: ', err.code);
        }
    });
    
    // fs.appendFile ("details.json", JSON.stringify(req.body), function(err) {
    //     if (err) throw err;
    //     console.log('complete');
    //     }
    // );    
    res.status(200).send("Signed Up!");
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));