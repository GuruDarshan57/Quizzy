const { con } = require("../connection")

const insertQuestion = (req, res) => {
    const { question, answer } = req.body
    // console.log(req.body)
    // console.log(question + " " + answer)
    if (question && answer) {
        con.query(`INSERT INTO  quiz_data(question, answer) VALUE ('${question}','${answer}' );`, (err, result) => {
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
    const { question, answer } = req.body
    console.log(question + " " + answer)
    if (id && question && answer) {
        con.query(`UPDATE quiz_data SET question = '${question}',answer='${answer}' WHERE id = ${id} ;`, (err, result) => {
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

module.exports = { insertQuestion, deleteQuestion, editQuestion }