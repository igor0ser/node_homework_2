import { UserModel, User } from './model'

export const UserService = {
  getOne: (id: string): Promise<User | undefined> =>
    UserModel.getOneById(Number(id)),
  getManyByLogin: (loginSubStr: string, limit: number = 10): Promise<User[]> =>
    UserModel.getManyByAttr({
      attr: 'login',
      value: loginSubStr,
      order: [['login', 'DESC']],
      limit,
    }),
  remove: (id: string): Promise<boolean> =>
    UserModel.remove(Number(id)),
  create: (user: Partial<User>): Promise<User> =>
    UserModel.create(user),
  update: (id: string, user: Partial<User>): Promise<User | false> =>
    UserModel.update(Number(id), user),
}