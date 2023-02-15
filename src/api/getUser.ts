import { Request, Response } from "express";
import { Repository } from "../repository/types";

export const getUserFactory =
  (repository: Repository) => (req: Request, res: Response) => {
    const { id } = req.params;
    // for security reason data validation should always happen before sending it to the repository
    const user = repository.get(id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).send();
    }
  };
