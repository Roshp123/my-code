const data = require("../database/trasactions.json")

 const getTransactions = (req,res)=>{
    res.status(200).json(data)
    res.end()
}


module.exports = getTransactions