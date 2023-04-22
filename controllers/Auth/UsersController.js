import * as usersDao from "./UsersDao.js";

const UsersController = (app) => {

    const findAllUsers = async (req, res) => {
        const allUsers = await usersDao.findAllUsers();
        console.log("JJJ")
        console.log(allUsers);
        res.json(allUsers);
    };

    const getUser = async (req, res) => {
        const userIdToUpdate = req.params.profileId;
        const user = await usersDao.getUser(userIdToUpdate);
        console.log("UOP")
        console.log(user);
        res.json(user);
    }

    app.get("/api/users/allUsers", findAllUsers);
    app.get("/api/users/getUser/:profileId", getUser);
};

export default UsersController;