const express = require("express");  //requires (imports) the               //express package
const PORT = process.env.PORT || 5000;  //see below
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/api/hello", (req, res) => {
    res.status(200).send("Hello World!");
   });

server.get("/api/login", (req, res) => {
    res.status(200).send("Login API!");
});

server.get("/api/signup", (req, res) => {
    res.status(200).send("Signed Up!");
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));