import {Router} from 'express';
const router = Router();

import bcrypt from 'bcrypt';
import db from "../database/createConnection.js";


async function userGuardHouse(req, res, next) {

    const user = await db.users.find({username: req.body.username}).toArray();
    console.log(user);
    if(user.length === 0) {
        res.send({ message: "Username did not match", isLoggedIn: false });
        return
    }
    
    const isSame = await bcrypt.compare(req.body.password, user[0].password);
    if (isSame) {
        
        req.session.isLoggedIn = true;
    }
    next();

}

router.post("/api/auth", userGuardHouse, (req, res) => {
   
    if (!req.session.isLoggedIn) {
        res.send({ message: "Password did not match", isLoggedIn: false });
        return
    }
    res.send({ isLoggedIn: true, message: "You're now logged in" });

});

export default router;