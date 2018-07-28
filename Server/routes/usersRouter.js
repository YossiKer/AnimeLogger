const express = require('express');
let router = express.Router();

const UsersBL = require('../BLS/UsersBL');

router.get('/', (req, res) => {
    res.send(UsersBL.getUsers());
});

router.get('/:username', (req, res) => {
    res.send(UsersBL.getUser(req.param('username')));
});

router.get('/:username/Animes', (req, res) => {
    res.send(UsersBL.getUserAnimes(req.param('username')));
});

router.post('/', (req, res) => {
    res.send(UsersBL.addUser(req.body));
});

router.post('/Anime', (req, res) => {
    res.send(UsersBL.addUserAnime(req.body));
});

router.delete('/:username', (req, res) => {
    res.send(UsersBL.deleteUser(req.param('username')));
});

module.exports = router; 