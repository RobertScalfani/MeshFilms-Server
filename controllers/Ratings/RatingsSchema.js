import mongoose from 'mongoose';

const schema = mongoose.Schema({
    reviewerId: { type: String, unique: false, required: true },
    filmId: { type: String, unique: false, required: true },
    filmName: String,
    reviewerUsername: String,
    rating: Number,
    review: String,
    createdAt: { type: Date, default: Date.now }
}, {collection: 'ratings'});

export default schema;