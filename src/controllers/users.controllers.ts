import { Request, Response } from "express";
import User from "../models/user";

const getUsers = (req: Request, res: Response) => {
  res.json({ getWorking: true });
};

const postUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  res.json({ name, email, password });
};

const putUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json(id);
};

const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(id);
};

export { getUsers, postUser, putUser, deleteUser };
