const { con } = require("../connection")

const getData = (req, res) => {
    con.query('SELECT * FROM quiz_data', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
}

module.exports = getData