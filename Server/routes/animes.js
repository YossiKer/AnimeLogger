var express = require('express');
var router = express.Router();
var AnimesDAL = require('../DALS/AnimesDAL');

router.get('/', (req, res, next) => {
    res.send(AnimesDAL.getAnimes());
})

router.get('/:animeName', (req, res, next) => {
    res.send(AnimesDAL.getAnime(req.param('animeName')));
})

router.post('/', (req, res, next) => {
    AnimesDAL.addAnime(req.body);
    res.send(AnimesDAL.getAnimes());
})

router.put('/:animeName', (req, res, next) => {
    res.send(AnimesDAL.updateAnime(req.param('animeName') ,req.body));
})

router.delete('/:animeName', (req, res, next) => {
    res.send(AnimesDAL.deleteAnime(req.param('animeName')));
})

module.exports = router; 