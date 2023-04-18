import mongoose from "mongoose";
import schema from "./UsersSchema.js";

const usersModel = mongoose.model("users", schema);
export default usersModel;