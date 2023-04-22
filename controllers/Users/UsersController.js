import * as usersDao from "./UsersDao.js";

const UsersController = (app) => {

    const register = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao.findUserByUsername(username);
        if (user) {
            res.sendStatus(409);
            return;
        }
        const newUser = await usersDao.createUser({username: username, password: password});
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };

    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        console.log(username);
        const user = await usersDao.findUserByCredentials(username, password);
        if (user) {
            req.session["currentUser"] = user
            console.log("login");
            console.log(req.session.id);
            res.json(user);
        } else {
            res.sendStatus(404);
        }
        console.error(user);
    };

    const profile = async (req, res) => {
        console.log("profile" + req.session);
        console.log(req.session.id);
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        res.json(currentUser);
    };

    const update = async  (req, res) => {
        const profileToUpdate = req.params._id;
        const updates = req.body;
        const updatedUser = await usersDao.updateUser(profileToUpdate, updates);
        res.json(updatedUser);
    }

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.get("/api/users/profile", profile);
    app.post("/api/users/logout", logout);
    app.put("/api/users/:_id", update);
};

export default UsersController;