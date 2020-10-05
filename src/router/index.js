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
const path = require('path')

const { Todo } = require('../../models')
const Op = require('../../models')


router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../views/index.ejs'), null, (err, data) => {
        if (err) {
            console.log('error');
            throw err;
        }
        else {
            // console.log("data :" + data);

            // Sequelize
            Todo.findAll({where:{del_flag: 0}}).then(todo => {
                res.render('.', {prodList: todo})
            });

            /*쿼리문
            pool.getConnection()
                .then(conn => {
                    console.log("Connect MariaDB!")
                    conn.query('select * from todo_tables where del_flag=0')
                        .then(rows => {
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
            */
        }
    })

})




router.post('/ajax', (req, res) => {
    var responseData = { 'result': 'ok', 'task': req.body.task, 'date' : req.body.date, 'priority' : req.body.priority, 'status': req.body.status }

    // Sequelize
    Todo.create({task: req.body.task, due_date:  req.body.date, priority: req.body.priority, status: req.body.status })
    .then(task => {
        console.log("Task ID : ", task.id);
        console.log("Task Date : ", task.due_date);
        console.log("Task Status : ", task.status);
    })

    /*쿼리문
    pool.getConnection()
        .then(conn => {
            console.log("INSERT DATA")
            return conn.query("INSERT INTO todo_tables(task, due_date, priority, status, del_flag) values ( ?, ?, ?, ?, ?)", [req.body.task, req.body.date, req.body.priority, req.body.status, 0]);
        })
        .catch(err => {
            console.log(err)
            console.log("NOOOOOOOOOOOOOOOOOOOOOOO")
            conn.release();
        })
    */

    res.json(responseData)
})


router.post('/delete', (req, res) => {
    var responseData = req.body;
    console.log(responseData);

    responseData.forEach(function (item, index) {
        Todo.update({del_flag:1}, {where:{id:item}})

        /* 쿼리문
        pool.getConnection()
        .then(conn => {
            console.log("Connect MariaDB!")
            conn.query('UPDATE todo_tables SET del_flag=1 where id=?', [item])
        })
        .catch(err => {
            console.log(err)
            conn.release();
        })
        */
    });
})



module.exports = router;