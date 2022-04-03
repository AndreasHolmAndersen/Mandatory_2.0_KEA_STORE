import {open} from "sqlite";
import  sqlite3  from "sqlite3";

export const db = await open({
    filename: 'keastore.db',
    driver: sqlite3.Database
});