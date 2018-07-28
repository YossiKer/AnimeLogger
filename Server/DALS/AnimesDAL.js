let ANIMES = require('../Data/animes');

const AnimesDAL = {
    getAnimes: () => {
        return ANIMES;
    },
    getAnime: (animeName) => {
        return ANIMES.find(anime => anime.anime_name === animeName);
    },
    addAnime: (newAnime) => {
        ANIMES.push(newAnime);

        return newAnime;
    },
    updateAnime: (newAnime) => {
        let oldAnime = ANIMES.find(anime => anime.anime_name === newAnime.anime_name);
        ANIMES[ANIMES.indexOf(oldAnime)] = newAnime;

        return newAnime;
    },
    deleteAnime: (animeName) => {
        let deletedAnime = ANIMES.find(anime => anime.anime_name === animeName);
        ANIMES.splice(ANIMES.indexOf(deletedAnime), 1);

        return deletedAnime;
    }
}

module.exports = AnimesDAL;