import mongoose from "mongoose";
import schema from "./RatingsSchema.js";

const ratingsModel = mongoose.model("ratings", schema);
export default ratingsModel;