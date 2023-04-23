import * as authDao from "./AuthDao.js";

const AuthController = (app) => {

    const register = async (req, res) => {
        const username = req.body.username;
        const user = await authDao.findUserByUsername(username);
        if (user) {
            res.sendStatus(409);
            return;
        }
        const newUser = await authDao.createUser(req.body);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };

    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        console.log(username);
        const user = await authDao.findUserByCredentials(username, password);
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
        const updatedUser = await authDao.updateUser(profileToUpdate, updates);
        res.json(updatedUser);
    }

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    app.post("/api/auth/register", register);
    app.post("/api/auth/login", login);
    app.get("/api/auth/profile", profile);
    app.post("/api/auth/logout", logout);
    app.put("/api/auth/:_id", update);
};

export default AuthController;