"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({ getWorking: true });
};
exports.getUsers = getUsers;
const postUser = (req, res) => {
    const { name, email, password } = req.body;
    res.json({ name, email, password });
};
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    res.json(id);
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json(id);
};
exports.deleteUser = deleteUser;
