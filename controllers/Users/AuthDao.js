import usersModel from "./UsersModel.js";

export const findUserByUsername = (username) => usersModel.findOne({ username });
export const findUserByCredentials = (username, password) => usersModel.findOne({ username, password });
export const createUser = (user) => usersModel.create(user);
export const updateUser = (uid, user) => usersModel.findOneAndUpdate({ _id: uid }, user);