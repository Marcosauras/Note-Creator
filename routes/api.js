// adding all required files
const express = require("express");
const noteHandler = require("../db/NoteHandler.js")
let router = express.Router();

// run a delete route to remove a note
router
    .route("notes/:id")
    .delete((err, req, res, next) => {
        noteHandler
            .deleteNote(req.params.id)
            .then(() => res.json({ok: true}))
            .catch(error => res.status(500).json(error))

    console.log("You have deleted a note")
    })

// routes to grab notes and add notes
router
    .route("/notes")
    .get((err, req, res, next) => {
        noteHandler
            .getNotesFromDatabase()
            .then(notes => {res.json(notes)})
            .catch(error => {res.status(500).json(error)})
    })
    .post((err, req, res, next) => {
        noteHandler
            .addNote(req.body)
            .then(noteAdded => {res.json(noteAdded)})
            .catch(error => {res.status(500).json(error)})
    })

module.exports = router