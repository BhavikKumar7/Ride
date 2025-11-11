import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect(function (err) {
    if(err) console.log("error connecting MySQL" + err);
    else console.log("MySQL Connected successfully");
});

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});
