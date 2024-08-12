const { con } = require("../connection")

const getData = (req, res) => {

    const topic = req.params.id
    if (topic) {
        con.query(`SELECT * FROM quiz_data WHERE topic='${topic}' `, (err, results) => {
            if (err) {
                res.status(500).json({ msg: "Server Error" })
                throw err;
            }
            else {
                res.json(results);
            }
        });

    }
    else {
        res.status(400).json({ msg: "Invalid request" })
    }

}

module.exports = getData