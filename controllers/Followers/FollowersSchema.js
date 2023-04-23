import mongoose from 'mongoose';

const schema = mongoose.Schema({
    followerId: { type: String, unique: false, required: true },
    followingId: { type: String, unique: false, required: true },
}, {collection: 'followers'});

export default schema;