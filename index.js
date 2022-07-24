const express = require("express")
require('dotenv').config()

const port = process.env.PORT || 5000
const app = express();

app.get('/ayoub',(req,res)=>{
  res.send("<h1>Hey Hey And Welcome Again</h1>");
});

app.listen(port , () => {
  console.log(`app is running on port ${port}`);
});
