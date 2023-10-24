const express = require ("express");
const app = express();
const port = process.env.PORT || 5000;


app.get("/", (req, res)=>{
    console.log("our server is successfully done");
})

app.listen(port, () =>{
    console.log(`our server is run to : ${port}`);
})