import * as usersDao from "./UsersDao.js";

const UsersController = (app) => {

    const findAllUsers = async (req, res) => {
        const allUsers = await usersDao.findAllUsers();
        res.json(allUsers);
    };

    const getUser = async (req, res) => {
        const userIdToGet = req.params.profileId;
        const user = await usersDao.getUser(userIdToGet);
        res.json(user);
    }

    const deleteUser = async (req, res) => {
        const userIdToDelete = req.params.profileId;
        const user = await usersDao.deleteUser(userIdToDelete);
        res.json(user);
    }

    app.get("/api/users/allUsers", findAllUsers);
    app.get("/api/users/getUser/:profileId", getUser);
    app.delete("/api/users/deleteUser/:profileId", deleteUser);
};

export default UsersController;