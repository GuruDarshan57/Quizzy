const express = require("express")
const app = express()
const mysql = require("mysql2")
require("dotenv").config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Server started at PORT " + PORT))

const { connect, con } = require('./connection')
connect()

const quiz = require("./routes/quiz")
app.use("/quiz", quiz)

