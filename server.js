const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let currentID = 0;

// req web browser
//res middleware 


// API ROUTES

//GET
app.get("/api/notes", function (req, res) {
    fs.readFile('db/db.json', "utf8", (err, data) => {
        if (err) throw err;
        res.json(data);
    })
});



//POST
var id = 0;
app.post("/api/notes", function (req, res) {
    fs.readFile('db/db.json', (err, data) => {
                if (err) throw err;
                let json = JSON.parse(data);
                let newNote = {
                    id: id = 1 + json.length,
                    title: req.body.title,
                    text: req.body.text,
                };
                console.log(req.body)
                json.push(newNote);
                fs.writeFile('db/db.json', JSON.stringify(json), (err) => {
                    if (err) throw err;
                    res.send('New Note: ' + newNote);
                });
            });
        });


//DELETE
app.delete('/api/notes/:title', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        let deleteNote = req.params.title;
        let json = JSON.parse(data);
        let jsonDelete = json.filter(item => item.title !== deleteNote);
        fs.writeFile('db/db.json', JSON.stringify(jsonDelete), (err) => {
            if (err) throw err;
            res.send('Note Deleted.');
        });
    });
});


// HTML ROUTES

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});





// LISTENING
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});