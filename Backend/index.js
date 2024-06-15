
require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

console.log(process.env.DATABASE_URL);


app.get("/",(req,res)=>{
    return res.status(200).json({
        message : "Running on port 3000"
    })
})

app.listen(3000);