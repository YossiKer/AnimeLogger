const AnimesDAL = require('../DALS/AnimesDAL');
const AnimesCategoriesDAL = require('../DALS/AnimesCategoriesDAL');
const UsersAnimesDAL = require('../DALS/UsersAnimesDAL');

const AnimesBL = {
    getAnimes: () => {
        return AnimesDAL.getAnimes(); 
    },
    getAnime: (animeName) => {
        return AnimesDAL.getAnime(animeName);
    },
    addAnime: (newAnime) => {
        return AnimesDAL.addAnime(newAnime);
    },
    updateAnime: (newAnime) => {
        return AnimesDAL.updateAnime(newAnime);
    },
    deleteAnime: (animeName) => {
        for (let animeCategory of AnimesCategoriesDAL.getAnimeCategories(animeName)) {
            AnimesCategoriesDAL.deleteAnimeCategory(animeName, animeCategory.category_name);
        }

        for (let animeUser of UsersAnimesDAL.getAnimeUsers(animeName)) {
            UsersAnimesDAL.deleteUserAnime(animeUser.username, animeName);
        }

        return AnimesDAL.deleteAnime(animeName);
    },
    getAnimeCategories: (animeName) => {
        return AnimesCategoriesDAL.getAnimeCategories(animeName);
    },
    addAnimeCategory: (newAnimeCategory) => {
        return AnimesCategoriesDAL.addAnimeCategory(newAnimeCategory);
    },
    deleteAnimeCategory: (animeName, categoryName) => {
        return AnimesCategoriesDAL.deleteAnimeCategory(animeName, categoryName);
    },
    getAnimeUsers: (animeName) => {
        return UsersAnimesDAL.getAnimeUsers(animeName);
    },
};

module.exports = AnimesBL;