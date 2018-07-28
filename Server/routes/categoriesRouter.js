const express = require('express');
let router = express.Router();

const CategoriesBL = require('../BLS/CategoriesBL');

router.get('/', (req, res) => {
    res.send(CategoriesBL.getCategories());
});

router.get('/:categoryName', (req, res) => {
    res.send(CategoriesBL.getCategory(req.param('categoryName')));
});

router.get('/:categoryName/Animes', (req, res) => {
    res.send(CategoriesBL.getCategoryAnimes(req.param('categoryName')));
});

router.post('/', (req, res) => {
    res.send(CategoriesBL.addCategory(req.body));
});

router.put('/', (req, res) => {
    res.send(CategoriesBL.updateCategory(req.body));
});

router.delete('/:categoryName', (req, res) => {
    res.send(CategoriesBL.deleteCategory(req.param('categoryName')));
})

module.exports = router; 