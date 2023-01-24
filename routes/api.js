// adding all required files
const router = require("express").Router();
const noteHandler = require("../db/NoteHandler.js")

// routes to grab notes and add notes
router
    .route("/notes")
    .get((req, res) => {
        noteHandler
            .getNotesFromDatabase()
            .then(notes => {    res.json(notes)})
            .catch(err => {console.log(err)})
    })
    .post((req, res) => {
        console.log("adding note")
        noteHandler
            .addNote(req.body)
            .then(noteAdded => {    res.json(noteAdded)})
            .catch(err => {console.log(err)})
    })

// run a delete route to remove a note
router
    .route("/notes/:id")
    .delete((req, res) => {
        noteHandler
            .deleteNote(req.params.id)
            .then(() => res.json({ok: true}))
            .catch(err => {console.log(err)})

    console.log("You have deleted a note")
    })

module.exports = router