import authModel from "./AuthModel.js";

export const findUserByUsername = (username) => authModel.findOne({ username });
export const findUserByCredentials = (username, password) => authModel.findOne({ username, password });
export const createUser = (user) => authModel.create(user);
export const updateUser = (uid, user) => authModel.findOneAndUpdate({ _id: uid }, user);