const express = require('express');
let router = express.Router();

const AnimesBL = require('../BLS/AnimesBL');

router.get('/', (req, res) => {
    res.send(AnimesBL.getAnimes());
});

router.get('/:animeName', (req, res) => {
    res.send(AnimesBL.getAnime(req.param('animeName')));
});

router.get('/:animeName/Categories', (req, res) => {
    res.send(AnimesBL.getAnimeCategories(req.param('animeName')));
});

router.get('/:animeName/Users', (req, res) => {
    res.send(AnimesBL.getAnimeUsers(req.param('animeName')));
});

router.post('/', (req, res) => {
    res.send(AnimesBL.addAnime(req.body));
});

router.post('/Category', (req, res) => {
    res.send(AnimesBL.addAnimeCategory(req.body));
})

router.put('/', (req, res) => {
    res.send(AnimesBL.updateAnime(req.body));
});

router.delete('/:animeName', (req, res) => {
    res.send((AnimesBL.deleteAnime(req.param('animeName'))));
});

router.delete('/:animeName/:categoryName', (req, res) => {
    res.send(AnimesBL.deleteAnimeCategory(req.param('animeName'), req.param('categoryName')));
});
module.exports = router; 