const express = require("express")

const Router = express.Router()

const getData = require("../controllers/quiz")
Router.route("/").get(getData)

module.exports = Router