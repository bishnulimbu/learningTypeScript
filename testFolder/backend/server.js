const mysql = require('mysql2/promise')
require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('backend index page.');
})

//creating connections.
let conn;
let pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

})


async function checkDb() {
    let tempConn;
    try {
        tempConn = await pool.getConnection();
        await tempConn.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`)
        console.log(`${process.env.DB_NAME} successfully created`);
        tempConn.release();
    } catch (e) {
        console.error("not created.", e);
        process.exit(1);
    }
}

(async () => {
    await checkDb();
    try {
        conn = await pool.getConnection();
        console.log("db successfully connected");
    } catch (e) {
        console.log("error", e);
        process.exit(1);

    }

})();
