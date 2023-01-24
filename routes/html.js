// adding all required files
const router = require("express").Router();
const path = require("path")

// this sends all notes to the html file for the user to be able to see all their notes
router
    .route("/notes")
    .get((req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router
    .route("/*")
    .get((req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'))    
})


module.exports = router