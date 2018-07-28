const CategoriesDAL = require('../DALS/CategoriesDAL');
const AnimesCategoriesDAL = require('../DALS/AnimesCategoriesDAL');

const CategoriesBL = {
    getCategories: () => {
        return CategoriesDAL.getCategories();
    },
    getCategory: (categoryName) => {
        return CategoriesDAL.getCategory(categoryName);
    },
    addCategory: (newCategory) => {
        return CategoriesDAL.addCategory(newCategory);
    },
    updateCategory: (newCategory) => {
        return CategoriesDAL.updateCategory(newCategory);
    },
    deleteCategory: (categoryName) => {
        for (let categoryAnime of AnimesCategoriesDAL.getCategoryAnimes(categoryAnime)) {
            AnimesCategoriesDAL.deleteAnimeCategory(categoryAnime.anime_name, categoryAnime);
        }

        return CategoriesDAL.deleteCategory(categoryName);
    },
    getCategoryAnimes: (categoryName) => {
        return AnimesCategoriesDAL.getCategoryAnimes(categoryName);
    }
}

module.exports = CategoriesBL;