import { GroupModel, Group } from './model'

export const GroupService = {
  getOne: (id: string): Promise<Group | undefined> =>
    GroupModel.getOneById(Number(id)),
  getAll: (loginSubStr: string, limit: number = 10): Promise<Group[]> =>
    GroupModel.getAll(),
  // remove: (id: string): Promise<boolean> =>
  //   UserModel.remove(Number(id)),
  // create: (user: Partial<User>): Promise<User> =>
  //   UserModel.create(user),
  // update: (id: string, user: Partial<User>): Promise<User | false> =>
  //   UserModel.update(Number(id), user),
}