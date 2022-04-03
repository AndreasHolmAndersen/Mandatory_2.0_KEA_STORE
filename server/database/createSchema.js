import { db } from "../database/createConnection.js";


const deleteMode = true;

if (deleteMode) {
    db.exec("DROP TABLE IF EXISTS users;");
}


//creates table in database
db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100),
    hashedPassword VARCHAR(100)
);`);

// Seed my database
if (deleteMode) {
    db.run(`INSERT INTO users (username, hashedPassword) VALUES ('Admin', '$2b$12$L.Gb.f/dlemogGXMCiip2eff8tHdwfA0i63ZRrYDBNxdhz3.GnCVi')`);
   
}

db.close();
