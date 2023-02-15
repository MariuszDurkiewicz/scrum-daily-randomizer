import { Request, Response } from "express";
import { Repository } from "../repository/types";

export const getAllUsersFactory =
  (repository: Repository) => (req: Request, res: Response) => {
    res.json(repository.all());
  };
