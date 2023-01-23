// adding all required files
const util = require("util");
const fs = require("fs");
const uuid = require("uuid").v1;

const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)

class NoteHandler {

    // writes all the notes passed through it to the database
    writeNote(noteAdded){
        return writeFile("./db.json", JSON.stringify(noteAdded));
    }
    // creating a way to read the database file
    // this reads all of the notes we put in there
    readNote(){
        return readFile("./db.json", "utf8")
    }

    // adds created note to the database so we can call on it later
    addNote(noteAdded){
        const{title, text} = noteAdded
        // sets the new note to be injected into the db
        const newNoteBeingAdded = { title, text, id: uuid() }
        // injects the new note
        return this.getNotesFromDatabase()
            .then(notes => [...notes, newNoteBeingAdded])
            .then(notesUpdated => this.writeNote(notesUpdated))
            .then(() => this.newNoteBeingAdded)
    }

    getNotesFromDatabase(){
        return this.readNote()
        .then(notes => {
            return JSON.parse(notes) || []
        })
    }
// deletes the note based off the id number
    deleteNote(id) {
        return this.getNotesFromDatabase()
            .then(notes => notes.filter(note => note.id !== id))
            .then(notesNotDeleted => this.writeNote(notesNotDeleted))
    }
}

module.exports = new NoteHandler();