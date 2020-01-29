import * as uuid from 'uuid/v1'
import { User } from './user.interface'
import { initialUsers } from './data/index'
import { validate } from './validate'

let users: User[] = [...initialUsers]

const res = validate(initialUsers[0])
const { error } = res;
console.log(error.toString());
console.log(res.toString());

export const userDB = {
  get: (id: string): User | undefined => {
    return users.find(user => user.id === id)
  },
  getByLogin: (loginSubstring: string, limit: number = 10): User[] => {
    return users
      .filter(user => user.login.includes(loginSubstring))
      .slice(0, limit)
  },
  create: (user: User): boolean => {
    users = [
      ...users,
      { ...user, id: uuid(), isDeleted: false },
    ]

    return true
  },
  remove: (id: string): boolean => {
    users = users.map(user => ({
      ...user,
      isDeleted: id === user.id || user.isDeleted
    }))

    return !!userDB.get(id)
  },
  update: (updatedUser: User): boolean => {
    users = users.map(user => updatedUser.id === user.id ? {
      ...user,
      ...updatedUser,
    } : user)

    return !!userDB.get(updatedUser.id)
  }
}