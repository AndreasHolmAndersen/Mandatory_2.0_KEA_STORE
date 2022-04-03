import express from "express";
import helmet from "helmet";
import session from "express-session";
import bcrypt from "bcrypt";
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv'
import cors from 'cors'
import { db } from "../server/database/createConnection.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet()); //https://www.npmjs.com/package/helmet

const username = "Andreas";
const password = "password";
const hashedPassword = "$2b$12$L.Gb.f/dlemogGXMCiip2eff8tHdwfA0i63ZRrYDBNxdhz3.GnCVi";


const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 6, // Limit each IP to 6 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/auth", authLimiter);


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

async function userGuardHouse(req, res, next) {
    if (req.query.username != username) {
        res.send({ message: "Wrong username", isLoggedIn: false });
        return
    }
    const isSame = await bcrypt.compare(req.query.password, hashedPassword);
    if (isSame) {
        req.session.isLoggedIn = true;
    }
    next();

}

app.get("/auth", userGuardHouse, (req, res) => {
    if (!req.session.isLoggedIn) {
        res.send({ message: "password did not match", isLoggedIn: false });
        return
    }
    res.send({ isLoggedIn: true });
    //res

});

app.get("/api/users", async (req,res) => {
    const movies = await db.all("SELECT * FROM users;");
    res.send({data: movies});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Running on server", PORT));
