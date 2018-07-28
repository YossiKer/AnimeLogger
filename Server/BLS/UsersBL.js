const UsersDAL = require('../DALS/UsersDAL');
const UsersAnimesDAL = require('../DALS/UsersAnimesDAL');

const UsersBL = {
    getUsers: () => {
        return UsersDAL.getUsers();
    },
    getUser: (username) => {
        return UsersDAL.getUser(username);
    },
    addUser: (newUser) => {
        return UsersDAL.addUser(newUser);
    },
    deleteUser: (username) => {
        for (let userAnime of UsersAnimesDAL.getUserAnimes(username)) {
            UsersAnimesDAL.deleteUserAnime(username, userAnime.anime_name);
        }

        return UsersDAL.deleteUser(username);
    },
    getUserAnimes: (username) => {
        let animes = UsersAnimesDAL.getUserAnimes(username);
        let animesDetails = UsersAnimesDAL.getUserAnimesDetails(username);

        for (let detailIndex in animesDetails) {
            animes[detailIndex].current_episode = animesDetails[detailIndex].current_episode;
        }

        return animes;
    },
    addUserAnime: (newUserAnime) => {
        return UsersAnimesDAL.addUserAnime(newUserAnime)
    }
};

module.exports = UsersBL;