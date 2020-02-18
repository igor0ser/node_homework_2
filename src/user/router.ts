import { Router } from 'express';
import { userDB } from './usersDB';
import { User } from './user.interface';
import { validateOnUpdate, validateOnCreate } from './validate';

export const userRouter = Router();

userRouter.get('/:id', (req, res) => {
    const user: User = userDB.get(req.params.id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('Cannot find user with this id');
    }
});

userRouter.get('/', (req, res) => {
    const { login, limit } = req.query;

    if (!login) {
        res.status(404).send('Please specify login query param');
    } else {
        res.status(200).json(userDB.getByLogin(login, limit));
    }
});

userRouter.delete('/:id', (req, res) => {
    const success = userDB.remove(req.params.id);

    if (success) {
        res.status(200).send('User was successfully removed');
    } else {
        res.status(404).send('Cannot find user with this id');
    }
});

userRouter.post('/', (req, res) => {
    const newUser = req.body;

    const { error } = validateOnCreate(newUser);

    if (error) {
        return res.status(400).send(error.toString());
    }

    const createdUser: User = userDB.create(req.body);
    res.status(201).json(createdUser);
});

userRouter.put('/:id', (req, res) => {
    const userToUpdate = req.body;
    const { error } = validateOnUpdate(userToUpdate);

    if (error) {
        return res.status(400).send(error.toString());
    }

    const updatedUser: User | false = userDB.update(req.params.id, req.body);

    if (updatedUser) {
        res.status(202).json(updatedUser);
    } else {
        res.status(404).send('Cannot find user with this id');
    }
});
