const express = require("express");
const app = express()
const cors =  require("cors");
const getTransactions  = require("./routes/getTransactionData");
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.get('/get_transactions',getTransactions)

app.listen(5000,()=>console.log("Server has Started"))