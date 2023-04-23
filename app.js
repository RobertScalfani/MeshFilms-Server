import express from 'express';
import cors from 'cors';
import session from "express-session";
import mongoose from "mongoose";
import AuthController from "./controllers/Users/AuthController.js";
import cookieParser from "cookie-parser";
import UsersController from "./controllers/Users/UsersController.js";
import RatingsController from "./controllers/Ratings/RatingsController.js";

const CONNECTION_STRING = 'mongodb+srv://robis345:ZcR1Cy0wp8zwmhCg@webdev-cluster.fukceya.mongodb.net/?retryWrites=true'

// Express/DB setup.
await mongoose.connect(CONNECTION_STRING);
const app = express();

app.set('trust proxy', 1)

app.use(session({
    secret: 'abcdf'
}));

app.use(
    cors({
        credentials: true,
        methods:['GET','POST','PUT','DELETE'],
        origin: ['http://localhost:3000', 'http://192.168.15.17:3000'],
    })
);
app.use(express.json());
app.use(cookieParser());

// API Controllers.
AuthController(app);
UsersController(app);
RatingsController(app);

app.listen(process.env.PORT || 4000);