"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid/v1");
const index_1 = require("./data/index");
const validate_1 = require("./validate");
let users = [...index_1.initialUsers];
const res = validate_1.validate(index_1.initialUsers[0]);
const { error } = res;
console.log(error.toString());
console.log(res.toString());
exports.userDB = {
    get: (id) => {
        return users.find(user => user.id === id);
    },
    getByLogin: (loginSubstring, limit = 10) => {
        return users
            .filter(user => user.login.includes(loginSubstring))
            .slice(0, limit);
    },
    create: (user) => {
        users = [
            ...users,
            Object.assign(Object.assign({}, user), { id: uuid(), isDeleted: false }),
        ];
        return true;
    },
    remove: (id) => {
        users = users.map(user => (Object.assign(Object.assign({}, user), { isDeleted: id === user.id || user.isDeleted })));
        return !!exports.userDB.get(id);
    },
    update: (updatedUser) => {
        users = users.map(user => updatedUser.id === user.id ? Object.assign(Object.assign({}, user), updatedUser) : user);
        return !!exports.userDB.get(updatedUser.id);
    }
};
//# sourceMappingURL=usersDB.js.map