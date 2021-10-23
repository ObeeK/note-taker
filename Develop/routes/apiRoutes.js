// don't need to add /api/... just need /...

// const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const db = path.resolve(__dirname, "../db")
const router = require('express').Router();
let idNumber = 1;


    console.log(__dirname);
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

        notesArray.push(newNotesArray);

        fs.writeFileSync(
            path.resolve(db, "db.json"),
            JSON.stringify(notesArray),
            function (err) {
                if (err) {
                    return console.log(err);
                }
            }
        );
        res.json(newNotesArray);
        idCounter += 1;
    });

module.exports = router