const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000,(req,res) =>{
   console.log("connected to port 3000");
});