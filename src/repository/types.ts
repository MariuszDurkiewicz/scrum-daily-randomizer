export enum UserStatus {
  online = "online",
  offline = "offline",
}

export type User = {
  id: string;
  name: string;
  role: string;
  team: string;
  status: UserStatus;
};

export interface Repository {
  all: () => User[];
  get: (id: string) => User | null;
  update: (user: User) => void;
  set: (user: User) => void;
}
