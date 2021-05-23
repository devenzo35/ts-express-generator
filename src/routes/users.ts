import express = require("express");
const router = express.Router();

import {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from "../controllers/users.controllers";

router.get("/", getUsers);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
