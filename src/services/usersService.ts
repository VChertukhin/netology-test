import { v4 as uuid4 } from 'uuid';

import { IUser } from '@interfaces/interfaces';

/**
 * service responsible for users fetching
 * @param usersNumber - amount of users to fetch
 */
export const fetchUsers = async (usersNumber: number = 50): Promise<IUser[]> => {
    /**
     * Yes it could be made by mocking some data in json (file or jsonplaceholer)
     * but I'd rather use random generation to make it more interesting
     */

    const names = ['Ivan', 'Viktor', 'Vladimir', 'Anton', 'Sergey'];
    const surnames = ['Velichenko', 'Smirnov', 'Levashov', 'Smekhov', 'Voinov'];
    const maxAge = 65;

    const createRandomUser = (): IUser => {
        const getRandomNumber = (max: number) => Math.round(Math.random() * max);

        return {
            id: uuid4(),
            name: names[getRandomNumber(names.length)],
            surname: surnames[getRandomNumber(surnames.length)],
            age: getRandomNumber(maxAge),
        };
    };

    return Array(usersNumber).map(() => createRandomUser());
};
