import * as uuid from 'uuid/v1';
import { User } from './user.interface';
import { initialUsers } from './data/index';

const users: User[] = [...initialUsers];

const sortAlpphabeticallyBy = (key: string) => (a: any, b: any) => {
    const fieldFromA = a[key];
    const fieldFromB = b[key];

    if (fieldFromA < fieldFromB) return -1;
    if (fieldFromA > fieldFromB) return 1;
    return 0;
};

export const userDB = {
    get: (id: string): User | undefined => {
        return users.find(user => user.id === id);
    },
    getByLogin: (loginSubstring: string, limit: number = 10): User[] => {
        return users
            .filter(user => user.login.includes(loginSubstring))
            .sort(sortAlpphabeticallyBy('login'))
            .slice(0, limit);
    },
    create: (user: Partial<User>): User => {
        const newUser = { ...user, id: uuid(), isDeleted: false } as User;

        users.push(newUser);

        return newUser;
    },
    update: (id: string, updatedUser: Partial<User>): User | false => {
        const user = userDB.get(id);

        if (!user) return false;

        Object.assign(user, updatedUser);

        return user;
    },
    remove: (id: string): boolean => {
        const userToRemove = userDB.get(id);

        if (!userToRemove) {
            return false;
        }

        userToRemove.isDeleted = true;

        return true;
    }
};
