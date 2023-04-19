import mongoose from 'mongoose';

const schema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    firstName: String,
    lastName: String,
    birthDate: Date,
    email: String,
    likedGenres: String,
    favoriteMovie: String,
    isAdmin: { type: Boolean, default: false },
    role: {
        type: String,
        default: "user",
        enum: ["admin", "user", "guest", "premium"],
    },
    createdAt: { type: Date, default: Date.now }
}, {collection: 'users'});

export default schema;