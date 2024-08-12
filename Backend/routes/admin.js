const express = require("express")

const Router = express.Router()

const { insertQuestion, deleteQuestion, editQuestion, getData } = require("../controllers/admin")

Router.route("/data").get(getData)

Router.route("/add").post(insertQuestion)

Router.route("/delete/:id").delete(deleteQuestion)

Router.route("/edit/:id").patch(editQuestion)

module.exports = Router