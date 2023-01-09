const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = `SELECT * from shoppinglist ORDER BY name, quantity , unit DESC;` ;

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const list = req.body;
    const sqlText = `INSERT INTO shoppinglist (name, quantity,unit)
                     VALUES ($1, $2. $3)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [list.name, list.quantity, list.unit])
        .then((result) => {
            console.log(`Added creature to the database`, list);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})
















module.exports = router;