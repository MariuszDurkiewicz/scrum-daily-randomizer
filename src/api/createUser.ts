import { Request, Response } from "express";
import { Repository, User, UserStatus } from "../repository/types";

export const createUserFactory =
  (repository: Repository) => (req: Request, res: Response) => {
    const data = req.body;
    // for security reason data validation should always happen before sending it to the repository
    const check = repository.get(data.id);

    if (check) {
      res.status(400).send();
      return;
    }

    const user: User = {
      id: data.id,
      name: data.name,
      role: data.role,
      team: data.team,
      status: UserStatus.online,
    };

    repository.set(user);

    res.status(200).send(user);
  };
