import express from 'express';
import cors from 'cors';
import session from "express-session";
import mongoose from "mongoose";
import UsersController from "./controllers/Users/UsersController.js";

const CONNECTION_STRING = 'mongodb+srv://robis345:ZcR1Cy0wp8zwmhCg@webdev-cluster.fukceya.mongodb.net/?retryWrites=true'

// Express/DB setup.
await mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(
    cors({
        credentials: true,
        origin: "http://192.168.15.17:3000",
    })
);
app.use(express.json());

// API Controllers.
// RatingsController(app);
UsersController(app);

app.listen(process.env.PORT || 4000);