const ANIMES = require('../Data/animes');
const CATEGORIES = require('../Data/categories');
let ANIMES_CATEGORIES = require('../Data/animes_categories');

const AnimesCategoriesDAL = {
    getCategoryAnimes: (categoryName) => {
        const animeNames = ANIMES_CATEGORIES.filter(categoriesAnimes => categoriesAnimes.category_name === categoryName);
        let categoryAnimes = [];

        for (let categoryAnime of animeNames) {
            categoryAnimes.push(ANIMES.find(anime => anime.anime_name === categoryAnime.anime_name));
        }

        return categoryAnimes;
    },
    getAnimeCategories: (animeName) => {
        const categoryNames = ANIMES_CATEGORIES.filter(animesCategories => animesCategories.anime_name === animeName);
        let animeCategories = [];

        for (let categoryName of categoryNames) {
            animeCategories.push(CATEGORIES.find(category => category.category_name === categoryName.category_name));
        }

        return animeCategories;
    },
    addAnimeCategory: (newAnimeCategory) => {
        ANIMES_CATEGORIES.push(newAnimeCategory);
        
        return newAnimeCategory;
    },
    deleteAnimeCategory: (animeName, categoryName) => {
        const deletedAnimeCategory = ANIMES_CATEGORIES.find(animeCategory => animeCategory.anime_name === animeName &&
                                                                             animeCategory.category_name === categoryName);
        ANIMES_CATEGORIES.splice(ANIMES_CATEGORIES.indexOf(deletedAnimeCategory), 1);
        
        return deletedAnimeCategory;
    }
};

module.exports = AnimesCategoriesDAL;