const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const loginRequestHandler = (req, res) => {
//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk;
//   });

//   req.on("end", () => {
//     //parse with regEx
//     console.log(body);
//   });
console.log(req.body.email)
console.log(req.body.password)
  res.send("successful");
};

//Express
const server = express();

//Middleware
server.use(express.static(path.join(__dirname, "public")));
server.use(bodyParser.urlencoded({extended: false}))

//route
server.post("/login", loginRequestHandler);

server.listen(5000, "localhost", () => {
  console.log("Server is Connected");
});
