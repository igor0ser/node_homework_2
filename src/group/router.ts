import { Router } from 'express';
import { Group } from './model';
import { GroupService } from './service';
// import { validateOnUpdate, validateOnCreate } from './validators';

export const groupRouter = Router();

groupRouter.get('/:id', async (req, res) => {
    const group: Group = await GroupService.getOne(req.params.id);

    if (group) {
        res.status(200).json(group);
    } else {
        res.status(404).send('Cannot find user with this id');
    }
});

groupRouter.get('/', async (req, res) => {
    const groups: Group[] = await GroupService.getAll();

    res.status(200).json(groups);
});
//
// groupRouter.delete('/:id', async (req, res) => {
//     const success = await GroupService.remove(req.params.id);
//
//     if (success) {
//         res.status(200).send('User was successfully removed');
//     } else {
//         res.status(404).send('Cannot find user with this id');
//     }
// });
//
//
// groupRouter.post('/', async (req, res) => {
//     const newGroup = req.body;
//
//     const { error } = validateOnCreate(newGroup);
//
//     if (error) {
//         return res.status(400).send(error.toString());
//     }
//
//     const createdUser: Group = await GroupService.create(req.body);
//
//     res.status(201).json(createdUser);
// });
//
// groupRouter.put('/:id', async (req, res) => {
//     const groupToUpdate = req.body;
//     const { error } = validateOnUpdate(groupToUpdate);
//
//     if (error) {
//         return res.status(400).send(error.toString());
//     }
//
//     const updatedGroup: Group | false = await GroupService.update(req.params.id, req.body);
//
//     if (updatedGroup) {
//         res.status(202).json(updatedGroup);
//     } else {
//         res.status(404).send('Cannot find user with this id');
//     }
// });
