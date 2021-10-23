const router = require('express').Router();
const path = require('path');

// module.exports = (app) => {

    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // app.get('/notes', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/notes.html'));
    // });
// };
module.exports = router