import { Router } from 'express';
import { GroupService } from './service'
// import { validateOnUpdate, validateOnCreate } from './validators';

export const groupRouter = Router();

groupRouter.get('/:id', async (req, res) => {
    const user: Router = await GroupService.getOne(req.params.id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('Cannot find user with this id');
    }
});

groupRouter.get('/', async (req, res) => {
    const { login, limit } = req.query;

    if (!login) {
        res.status(404).send('Please specify login query param');
    } else {
        const users: Router[] = await GroupService.getManyByLogin(login, limit);

        res.status(200).json(users);
    }
});
//
// userRouter.delete('/:id', async (req, res) => {
//     const success = await UserService.remove(req.params.id);
//
//     if (success) {
//         res.status(200).send('User was successfully removed');
//     } else {
//         res.status(404).send('Cannot find user with this id');
//     }
// });
//
//
// userRouter.post('/', async (req, res) => {
//     const newUser = req.body;
//
//     const { error } = validateOnCreate(newUser);
//
//     if (error) {
//         return res.status(400).send(error.toString());
//     }
//
//     const createdUser: Router = await UserService.create(req.body);
//
//     res.status(201).json(createdUser);
// });
//
// userRouter.put('/:id', async (req, res) => {
//     const userToUpdate = req.body;
//     const { error } = validateOnUpdate(userToUpdate);
//
//     if (error) {
//         return res.status(400).send(error.toString());
//     }
//
//     const updatedUser: Router | false = await UserService.update(req.params.id, req.body);
//
//     if (updatedUser) {
//         res.status(202).json(updatedUser);
//     } else {
//         res.status(404).send('Cannot find user with this id');
//     }
// });
