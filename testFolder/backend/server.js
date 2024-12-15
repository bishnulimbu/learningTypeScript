const mysql = require('mysql2/promise')
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get('/nameSearch', async (req, res) => {
    // res.send("hello");
    try {
        let userData = await fetchNames();
        return res.json(userData);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

async function fetchNames() {
    try {
        const [rows] = await pool.query("select * from userNames");
        return rows;
    } catch (error) {
        console.error("query unsuccessful", error)
    }
}

app.post('/nameSearch', async (req, res) => {
    const { name } = req.body;
    if (!name || name.trim().length === 0) {
        res.status(400).json({ error: "name required." })
    }
    const query = "insert into userNames (names) values (?)";
    // const values = [name];
    try {
        const [result] = await pool.execute(query, [name]);
        if (result.affectedRows > 0) {
            return res.status(200).json({ success: true, message: "name added successfully." });
        } else {
            return res.status(400).json({ success: false, message: "insertion failed." })
        }
        //added success message.
    } catch (e) {
        if (e.code === 'ERR_DUP_ENTRY') {
            return res.status(409).json({ message: "duplicate entry" })
        }
        console.error(e);
        return res.status(500).json({ error: "database error" });
    }

})

app.delete('/nameSearch', async (req, res) => {
    const { name } = req.body;
    const query = "delete from userNames where names=?";
    try {
        const [result] = await pool.execute(query, [name]);
        if (result.affectedRows > 0) {
            return res.status(200).json({ success: true, message: "name deleted successfully." });
        } else {
            return res.status(400).json({ success: false, message: "deletion failed." })
        }
    } catch (error) {
        console.error("type of error?", error);
        return res.status(500).json({ error: "error" })
    }
})

// async function addNames(jkjk) {
//     const data1 = res.body();
//     try {
//
//         query = "insert into userNames values"
//
//     }
// }
