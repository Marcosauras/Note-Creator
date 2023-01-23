// adding all required files
const express = require("express")
const path = require("path")
let router = express.Router()

// this sends all notes to the html file for the user to be able to see all their notes
router
    .route("/notes")
    .get((req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// if the user plays with the url they will be sent back to the home page
router
    .route("*")
    .get((req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'))    
})


module.exports = router