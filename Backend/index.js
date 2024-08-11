const express = require("express")
const app = express()
const mysql = require("mysql2")
require("dotenv").config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Server started at PORT " + PORT))

const { connect, con } = require('./connection')
connect()

const try1 = () => {
    con.query('SELECT * FROM quiz_data', (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

try1()