import followersModel from "./FollowersModel.js";

export const createFollowing = (following) => followersModel.create(following);

export const getFollowings = (followerId) => followersModel.find({ followerId: followerId });

export const getFollowers = (followingId) => followersModel.find({ followingId: followingId });