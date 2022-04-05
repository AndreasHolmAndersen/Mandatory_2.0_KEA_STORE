import db from "../database/createConnection.js";

await db.users.deleteMany({seeded: true});

db.users.insertOne({
    username: "Admin", 
    password: "$2b$12$L.Gb.f/dlemogGXMCiip2eff8tHdwfA0i63ZRrYDBNxdhz3.GnCVi",
    seeded: true
});

const users = await db.users.find({}).toArray();

console.log(users);

db.client.close();