import * as uuid from 'uuid/v1';
import { User } from './user.interface';
import { initialUsers } from './data/index';

let users: User[] = [...initialUsers];

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

        users = [
            ...users,
            newUser
        ];

        return newUser;
    },
    update: (id: string, updatedUser: Partial<User>): User | undefined => {
        users = users.map(user => id === user.id ? {
            ...user,
            ...updatedUser
        } : user);

        return userDB.get(id);
    },
    remove: (id: string): boolean => {
        users = users.map(user => ({
            ...user,
            isDeleted: id === user.id || user.isDeleted
        }));

        return !!userDB.get(id);
    }
};
