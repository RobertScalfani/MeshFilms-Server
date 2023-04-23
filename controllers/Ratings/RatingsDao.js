import ratingsModel from "./RatingsModel.js";

export const findByReviewerId = (userId) => ratingsModel.findOne({ reviewerId: userId });
export const findByFilmId = (filmId) => ratingsModel.findOne({ filmId: filmId });
export const getAllFilms = () => ratingsModel.find();
export const createRating = (rating) => ratingsModel.create(rating);
export const deleteRating = (ratingId) => ratingsModel.deleteOne({ _id: ratingId });