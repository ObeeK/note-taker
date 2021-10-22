// don't need to add /api/... just need /...

const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const db = path.resolve(__dirname, "../db")
let idNumber = 1;

router.get('/notes', (req, res) => {
    fs.readFile(path.resolve(db, "db.json"), (err, data) => {
        res.json(JSON.parse(data));
    });
});

router.post("/notes", (req, res) => {
    let notesArray = [];

    let data = fs.readFileSync(path.resolve(db, "db.json"));
    notesArray = JSON.parse(data);

    let newNotesArray = {
        id: idNumber,
        title: req.body.title,
        text: req.body.text,
    };

    
    
})