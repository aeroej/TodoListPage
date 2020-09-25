const express = require('express');
const router = express.Router();

// DB
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '192.168.1.70',
    port: 5507,
    user: 'ejkim',
    password: 'ejkim',
    database: 'my_todo'
});

//ejs
const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

router.get('/', (req, res) => {
    fs.readFile(__dirname + '/index.ejs', null, (err, data) => {
        if (err) {
            console.log('error');
            throw err;
        }
        else {
            console.log("data :" + data);
            pool.getConnection()
                .then(conn => {
                    console.log("Connect MariaDB!")
                    conn.query('select * from todo_table where del_flag=0')
                        .then(rows => {
                            console.log(rows);
                            res.render('.', { prodList: rows })
                        })
                        .catch(err => {
                            console.log(err);
                            conn.release();
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })

})




router.post('/ajax', (req, res) => {
    var responseData = { 'result': 'ok', 'task': req.body.task, 'date' : req.body.date, 'priority' : req.body.priority }

    pool.getConnection()
        .then(conn => {
            console.log("INSERT DATA")
            return conn.query("INSERT INTO todo_table(task, due_date, priority, status, del_flag) values ( ?, ?, ?, ?, ?)", [req.body.task, req.body.date, req.body.priority, 0, 0]);
        })
        .catch(err => {
            console.log(err)
            console.log("NOOOOOOOOOOOOOOOOOOOOOOO")
            conn.release();
        })





    res.json(responseData)
})


router.post('/delete', (req, res) => {
    var responseData = req.body;

    console.log(responseData);
    responseData.forEach(function (item, index) {
        pool.getConnection()
        .then(conn => {
            console.log("Connect MariaDB!")
            conn.query('UPDATE todo_table SET del_flag=1 where id=?', [item])
        })
        .catch(err => {
            console.log(err)
            conn.release();
        })
    });
})



module.exports = router;