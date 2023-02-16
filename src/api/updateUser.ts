import { Request, Response } from "express";
import { Repository, User } from "../repository/types";

export const updateUserFactory =
  (repository: Repository) => (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    // for security reason data validation should always happen before sending it to the repository
    const user = repository.get(id);

    if (!user) {
      res.status(404).send();
      return;
    }

    const updatedUser: User = {
      id: user.id,
      name: data.name,
      role: data.role,
      team: data.team,
      status: data.status,
    };

    repository.update(updatedUser);

    res.status(200).send(updatedUser);
  };
