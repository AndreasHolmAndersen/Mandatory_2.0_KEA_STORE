import express from "express";
import helmet from "helmet";
import session from "express-session";
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv'
import cors from 'cors'
import loginRouter from "../server/routers/loginRouter.js";
import contactRouter from "../server/routers/contactRouter.js";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet()); //https://www.npmjs.com/package/helmet

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 6 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/api/auth", authLimiter);

app.use(loginRouter);
app.use(contactRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Running on server", PORT));
