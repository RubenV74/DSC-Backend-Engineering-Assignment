const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
require("dotenv").config();
app = express()

const PORT = process.env.PORT ||3000;
app.use(cors());
app.use(express.json());

app.use((req,res)=>{res.status(400).send('<h1>404</h1><span>Page Not Found!</span>')});
app.listen(PORT, ()=> console.log(`express is running on port ${PORT}`));