require("dotenv").config()
const mysql = require("mysql2")


const con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: 10780
});

const connect = () => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected to DB");
    });
}

module.exports = { connect, con }