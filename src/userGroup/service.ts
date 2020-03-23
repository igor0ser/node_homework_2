import { UserGroupModel, UserGroup } from './model';

export const UserGroupService = {
    getAll: (): Promise<UserGroup[]> =>
        UserGroupModel.getAll(),
    create: (group: Partial<UserGroup>): Promise<UserGroup> =>
      UserGroupModel.create(group),
};
