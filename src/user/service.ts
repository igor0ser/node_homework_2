import { UserModel, User } from './model'
import { UserAttributes } from './interface'

export const UserService = {
  getOne: (id: string): Promise<UserAttributes | undefined> =>
    UserModel.getOneById(Number(id)),
  getManyByLogin: (loginSubStr: string, limit: number = 10): Promise<UserAttributes[]> =>
    UserModel.getManyByAttr({
      attr: 'login',
      value: loginSubStr,
      order: [['login', 'DESC']],
      limit,
    }),
  remove: (id: string): Promise<boolean> =>
    UserModel.remove(Number(id)),
  create: (user: Partial<UserAttributes>): Promise<UserAttributes> =>
    UserModel.create(user),
  update: (id: string, user: Partial<UserAttributes>): Promise<UserAttributes | false> =>
    UserModel.update(Number(id), user),
}