import * as followersDao from "./FollowersDao.js";
import * as usersDao from "../Users/UsersDao.js";
import {getFollowers} from "./FollowersDao.js";

const FollowersController = (app) => {

    const addFollowing = async (req, res) => {
        const rating = await followersDao.createFollowing(req.body);
        res.json(rating)
    };

    const getFollowings = async (req, res) => {
        const followerId = req.params.followerId;
        const followRelationships = await followersDao.getFollowings(followerId);
        const followingIds = followRelationships.map((followRelation) => followRelation.followingId);
        const followings = await usersDao.getManyUsers(followingIds)
        res.json(followings)
    };

    const getFollowers = async (req, res) => {
        const followedId = req.params.followedId;
        const followRelationships = await followersDao.getFollowers(followedId);
        const followerIds = followRelationships.map((followRelation) => followRelation.followerId);
        const followers = await usersDao.getManyUsers(followerIds)
        res.json(followers)
    };

    app.post("/api/followers/addFollowing", addFollowing);
    app.get("/api/followers/following/:followerId", getFollowings);
    app.get("/api/followers/followers/:followedId", getFollowers);
};

export default FollowersController;