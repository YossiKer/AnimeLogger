let USERS = require('../Data/users');

const UsersDAL = {
    getUsers: () => {
        return USERS;
    },
    getUser: (username) => {
        return USERS.find(user => user.username === username);
    },
    addUser: (newUser) => {
        USERS.push(newUser);

        return newUser;
    },
    deleteUser: (username) => {
        const deletedUser = USERS.find(user => user.username === username);

        USERS.splice(USERS.indexOf(deletedUser), 1);

        return deletedUser;
    }
}

module.exports = UsersDAL;