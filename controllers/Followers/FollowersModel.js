import mongoose from "mongoose";
import schema from "./FollowersSchema.js";

const followersModel = mongoose.model("followers", schema);

export default followersModel;