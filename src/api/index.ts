import { Router } from "express";
import createRepository from "../repository";
import { getUserFactory } from "./getUser";
import { updateUserFactory } from "./updateUser";
import { createUserFactory } from "./createUser";
import { getAllUsersFactory } from "./getAllUsers";

const repository = createRepository();

const getAllUsers = getAllUsersFactory(repository);
const getUser = getUserFactory(repository);
const updateUser = updateUserFactory(repository);
const createUser = createUserFactory(repository);

const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.put("/users/:id/update", updateUser);
router.post("/users/create", createUser);

export default router;
