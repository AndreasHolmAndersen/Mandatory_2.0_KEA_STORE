import {Router} from 'express';
const router = Router();

import bcrypt from 'bcrypt';
import db from "../database/createConnection.js";



const username = "Admin";
const password = "password";
const hashedPassword = "$2b$12$L.Gb.f/dlemogGXMCiip2eff8tHdwfA0i63ZRrYDBNxdhz3.GnCVi";





async function userGuardHouse(req, res, next) {

    const user = await db.users.find({username: req.body.username}).toArray();
    console.log(user);
    if(user.length === 0) {
        res.send({ message: "Username did not match", isLoggedIn: false });
        return
    }
    
    // if (req.body.username != username) {
    //     console.log(req.body.username);
    //     res.send({ message: "Wrong username", isLoggedIn: false });
    //     return
    // }
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
    //res

});

export default router;