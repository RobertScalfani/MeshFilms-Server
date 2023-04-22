import authModel from "./AuthModel.js";

export const findAllUsers = () => authModel.find();
export const getUser = (userId) => authModel.findOne({_id: userId});
export const deleteUser = (uid) => authModel.deleteOne({ _id: uid });