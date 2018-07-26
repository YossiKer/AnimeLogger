const ANIMES = [
    {
        anime_name: 'qwer',
        latest_episode: 100
    },
    {
        anime_name: 'asdf',
        latest_episode: 68
    },
    {
        anime_name: 'zxcv',
        latest_episode: 87
    },
    {
        anime_name: 'tyui',
        latest_episode: 168
    },
    {
        anime_name: 'ghjk',
        latest_episode: 8946
    },
    {
        anime_name: 'bnm,',
        latest_episode: 2131
    },
    {
        anime_name: 'uiop',
        latest_episode: 987
    }
]

const AnimesDAL = {
    getAnimes: () => {
        return ANIMES;
    },
    getAnime: (animeName) => {
        return ANIMES.find(anime => anime.anime_name === animeName);
    },
    addAnime: (newAnime) => {
        return ANIMES.push(newAnime);
    },
    updateAnime: (animeName, newAnime) => {
        let oldAnime = ANIMES.find(anime => anime.anime_name === animeName);
        ANIMES[ANIMES.indexOf(oldAnime)] = newAnime;
        return ANIMES;
    },
    deleteAnime: (animeName) => {
        let deletedAnime = ANIMES.find(anime => anime.anime_name === animeName);
        return ANIMES.splice(ANIMES.indexOf(deletedAnime), 1);
    }
}

module.exports = AnimesDAL;