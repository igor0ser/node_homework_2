"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid/v1");
const initialUsers_1 = require("./initialUsers");
let users = [...initialUsers_1.initialUsers];
exports.userDB = {
    get: (id) => {
        return users.find(user => user.id === id);
    },
    getByLogin: (loginSubstring, limit = 10) => {
        return users
            .filter(user => user.login.includes(loginSubstring, limit))
            .slice(0, limit);
    },
    create: (user) => {
        users = [...users, Object.assign(Object.assign({}, user), { id: uuid() })];
    },
    remove: (id) => {
        users = users.map(user => (Object.assign(Object.assign({}, user), { isDeleted: id === user.id || user.isDeleted })));
    },
    update: (updatedUser) => {
        users = users.map(user => updatedUser.id === user.id ? Object.assign(Object.assign({}, user), updatedUser) : user);
    }
};
//# sourceMappingURL=usersDataBase.js.map