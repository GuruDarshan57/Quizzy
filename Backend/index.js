const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log("Server started at PORT " + PORT))

app.get("/", (req, res) => {
    res.send("<h1 style='color:green'>Server is up and running</h1>")
})

const { connect, con } = require('./connection')
connect()

const quiz = require("./routes/quiz")
app.use("/quiz", quiz)

const admin = require("./routes/admin")
app.use("/admin", admin)

//Table creation
// con.query("CREATE TABLE quiz_data (id INT AUTO_INCREMENT PRIMARY KEY,topic VARCHAR(255) NOT NULL,question TEXT NOT NULL,answer TEXT NOT NULL,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);", function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
// });


//sample data insertion
// con.query("INSERT INTO quiz_data (topic, question, answer) VALUES ('React', 'What is React?', 'A JavaScript library for building user interfaces.');", function (err, result) {
//     if (err) throw err;
//     console.log("Sample data inserted");
// });
