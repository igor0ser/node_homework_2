"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersDB_1 = require("./usersDB");
exports.userRouter = express_1.Router();
exports.userRouter.get('/:id', (req, res) => {
    const user = usersDB_1.userDB.get(req.params.id);
    if (user) {
        res.json(user);
    }
    else {
        res.sendStatus(400, 'Cannot find user with this id');
    }
});
exports.userRouter.get('/', (req, res) => {
    const { login, limit } = req.query;
    console.log({ login, limit });
    if (!login) {
        res.sendStatus(400, 'Please specify login query param');
    }
    else {
        res.json(usersDB_1.userDB.getByLogin(login, limit));
    }
});
exports.userRouter.delete('/:id', (req, res) => {
    const success = usersDB_1.userDB.remove(req.params.id);
    if (success) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(400, 'Failed to remove user');
    }
});
exports.userRouter.post('/', (req, res) => {
    const success = usersDB_1.userDB.create(req.body);
    if (success) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(400, 'Failed to create user');
    }
});
exports.userRouter.put('/', (req, res) => {
    const success = usersDB_1.userDB.update(req.body);
    if (success) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(400, 'Failed to update user');
    }
});
//# sourceMappingURL=index.js.map