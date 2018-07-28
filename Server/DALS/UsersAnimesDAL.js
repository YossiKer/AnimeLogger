const ANIMES = require('../Data/animes');
const USERS = require('../Data/users');
let USERS_ANIMES = require('../Data/users_animes');

const AnimesUsersDAL = {
    getUserAnimes: (username) => {
        const animeNames = USERS_ANIMES.filter(userAnime => userAnime.username === username);

        let userAnimes = [];

        for (let userAnime of animeNames) {
            userAnimes.push(ANIMES.find(anime => anime.anime_name === userAnime.anime_name));
        }

        return userAnimes;
    },
    getAnimeUsers: (animeName) => {
        const userAnimes = USERS_ANIMES.filter(userAnime => userAnime.anime_name === animeName);
        console.log(userAnimes)
        let animeUsers = [];

        for (let userAnime of userAnimes) {
            animeUsers.push(USERS.find(user => user.username === userAnime.username));
        }

        return animeUsers;
    },
    addUserAnime: (newUserAnime) => {
        USERS_ANIMES.push(newUserAnime);
        
        return newUserAnime;
    },
    deleteUserAnime: (username, animeName) => {
        const deletedUserAnime = USERS_ANIMES.find(userAnime => userAnime.username === username &&
                                                                userAnime.anime_name === animeName);
        USERS_ANIMES.splice(USERS_ANIMES.indexOf(deletedUserAnime), 1);
        
        return deletedUserAnime;
    },
    getUserAnimesDetails: (username) => {
        return USERS_ANIMES.filter(userAnime => userAnime.username === username);
    }
};

module.exports = AnimesUsersDAL;