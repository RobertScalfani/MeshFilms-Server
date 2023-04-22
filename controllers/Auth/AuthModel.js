import mongoose from "mongoose";
import schema from "./AuthSchema.js";

const authModel = mongoose.model("users", schema);
export default authModel;