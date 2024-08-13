const { con } = require("../connection")


const getData = (req, res) => {
    con.query(`SELECT * FROM quiz_data `, (err, results) => {
        if (err) {
            res.status(500).json({ msg: "Server Error" })
            throw err;
        }
        else {
            res.json(results);
        }

    })
}

const insertQuestion = (req, res) => {
    const { question, answer, topic } = req.body
    // console.log(req.body)
    // console.log(question + " " + answer)
    if (question && answer) {
        con.query(`INSERT INTO  quiz_data(question, answer,topic) VALUE ('${question}','${answer}','${topic}' );`, (err, result) => {
            if (err) {
                res.json({ msg: "Server error" })
                console.log("Insertion error : " + err.message)
            }
            else {

                // console.log(result)
                res.json({ msg: "Added successfully" })
            }

        })
    }
    else {
        res.status(400).json({ msg: "Pls provide data" })
    }
}

const deleteQuestion = (req, res) => {
    const id = req.params.id
    // console.log(id)
    if (id) {
        con.query(`DELETE FROM quiz_data WHERE id = ${id};`, (err, result) => {
            if (err) {
                res.json({ msg: "Server error" })
                console.log("Deletion error : " + err.message)
            }
            else {

                // console.log(result)
                res.json({ msg: "Deleted successfully" })
            }

        })
    }
    else {
        res.status(400).json({ msg: "Pls provide id" })
    }
}

const editQuestion = (req, res) => {
    const id = req.params.id
    console.log(id)
    const { question, answer, topic } = req.body
    console.log(question + " " + answer + " " + topic)
    if (id && question && answer) {
        con.query(`UPDATE quiz_data SET question = '${question}',answer='${answer}',topic='${topic}' WHERE id = ${id} ;`, (err, result) => {
            if (err) {
                res.json({ msg: "Server error" })
                console.log("Edit error : " + err.message)
            }
            else {

                // console.log(result)
                res.json({ msg: "Updated successfully" })
            }

        })
    }
    else {
        res.status(400).json({ msg: "Pls provide all fields" })
    }
}

module.exports = { insertQuestion, deleteQuestion, editQuestion, getData }