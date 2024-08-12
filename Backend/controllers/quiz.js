const { con } = require("../connection")

const getData = (req, res) => {
    con.query('SELECT * FROM quiz_data', (err, results) => {
        if (err) {
            res.status(500).json({ msg: "Server Error" })
            throw err;
        }
        else {
            res.json(results);
        }
    });
}

module.exports = getData