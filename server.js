// adding all required files
const express = require("express");
const theApiRoutes = require("./routes/api");
const theHTMLRoutes = require("./routes/html.js")

const app = express();

// setting port number
const PORT = process.env.PORT || 3001 || 5000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"))

// setting up routes 
app.use("/api", theApiRoutes);
app.use("/", theHTMLRoutes);

// listen for port number and tell user what it is listening to.
app.listen(PORT, () => {
    console.log(`The Server is on PORT number ${PORT}`)
});