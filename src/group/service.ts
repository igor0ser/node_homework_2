import { GroupModel, Group } from './model'

export const GroupService = {
  getOne: (id: string): Promise<Group | undefined> =>
    GroupModel.getOneById(Number(id)),
  getAll: (): Promise<Group[]> =>
    GroupModel.getAll(),
  // remove: (id: string): Promise<boolean> =>
  //   GroupModel.remove(Number(id)),
  // create: (user: Partial<Group>): Promise<Group> =>
  //   GroupModel.create(user),
  // update: (id: string, user: Partial<Group>): Promise<Group | false> =>
  //   GroupModel.update(Number(id), user),
}