const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// var tableData = require("/data/notes");


// HTML ROUTES

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

// API ROUTES

// module.exports = function (app) {
//     // API GET Requests
//     // Below code handles when users "visit" a page.
//     // In each of the below cases when a user visits a link
//     // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//     // ---------------------------------------------------------------------------
  
//     app.get("/api/tables", function (req, res) {
//       res.json(tableData);
//     });
  
//     app.get("/api/waitlist", function (req, res) {
//       res.json(waitListData);
//     });
  
 
//     // ---------------------------------------------------------------------------
  
//     app.post("/api/tables", function (req, res) {
  
//       if (tableData.length < 5) {
//         tableData.push(req.body);
//         res.json(true);
//       }
//       else {
//         waitListData.push(req.body);
//         res.json(false);
//       }
//     });
  
  
//     app.post("/api/clear", function (req, res) {
 
//         tableData.length = 0;
//       waitListData.length = 0;
  
//       res.json({ ok: true });
//     });
//   };
  