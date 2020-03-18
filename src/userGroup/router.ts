import { Router } from 'express';
import { UserGroup } from './model';
import { UserGroupService } from './service';

export const userGroupRouter = Router();

userGroupRouter.get('/', async (req, res) => {
    const userGroups: UserGroup[] = await UserGroupService.getAll();

    res.status(200).json(userGroups);
});

// userGroupRouter.post('/', async (req, res) => {
//     const newUserGroup = req.body;
//
//     const { error } = validateOnCreate(newUserGroup);
//
//     if (error) {
//         return res.status(400).send(error.toString());
//     }
//
//     const createdUserGroup: UserGroup = await UserGroupService.create(req.body);
//
//     res.status(201).json(createdUserGroup);
// });
