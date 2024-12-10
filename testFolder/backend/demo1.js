//will replce the connection string with a pool.
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


async function checkDb() {
    let tempConn;
    try {
        tempConn = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        })
        await tempConn.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`)
        console.log(`${process.env.DB_NAME} successfully created`);
        await tempConn.end();
    } catch (e) {
        console.error("not created.", e);
        process.exit(1);
    }
}

(async () => {
    await checkDb();
    try {
        conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD
        })
        console.log("db successfully connected");
    } catch (e) {
        console.log("error", e);
        process.exit(1);

    }

})();
