import usersModel from "./UsersModel.js";

export const findAllUsers = () => usersModel.find();
export const getUser = (userId) => usersModel.findOne({_id: userId});
export const deleteUser = (userId) => usersModel.deleteOne({ _id: userId });