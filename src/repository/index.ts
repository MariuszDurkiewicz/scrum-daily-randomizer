import { Repository, User } from "./types";

const cache: User[] = [];

export default (): Repository => {
  return {
    all: () => cache,
    get: (id: string) => cache.find((user) => user.id === id) || null,
    update: (user: User) => {
      cache.forEach((u, index) => {
        if (u.id === user.id) {
          cache[index] = user;
        }
      });
    },
    set: (user: User) => cache.push(user),
  };
};
