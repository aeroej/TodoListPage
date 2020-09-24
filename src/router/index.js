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




// pool.getConnection()
//     .then (conn => {
//         console.log("Connect MariaDB!")
//         conn.query('select id, task from todo_table')
//         .then(rows => {
//             console.log(rows);
//             return rows
//             // return conn.query("INSERT INTO todo_table values (8, 'task', '2020-09-08', 1, 0, 0)");
//         })
//         .catch(err => {
//             conn.release();
//         })
//     })
//     .catch(err => {
//         console.log(err)
//         conn.release();
//     })



//ejs
const ejs = require('ejs');
const fs = require('fs');
const http = require('http');
// const mainPage = fs.readFileSync(__dirname + '/index.ejs');




router.get('/test', (req, res) => {
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
                    conn.query('select * from todo_table')
                        .then(rows => {
                            console.log(rows);
                            res.render('.', { prodList: rows })
                            // return conn.query("INSERT INTO todo_table values (8, 'task', '2020-09-08', 1, 0, 0)");
                        })
                        .catch(err => {
                            console.log(err);
                            conn.release();
                        })
                })
                .catch(err => {
                    console.log(err)
                    conn.release();
                })
        }
    })

})




router.post('/test/ajax', (req,res) =>{
    console.log(req.body.id);
    var responseData = {'result':'ok','id':req.body.id}

    pool.getConnection()
        .then(conn => {
            console.log("INSERT DATA")
            return conn.query(`INSERT INTO todo_table values (${req.body.id}, 'test', '2020-09-08', 0, 0, 0)`);
        })
        .catch(err => {
            console.log(err)
            console.log("NOOOOOOOOOOOOOOOOOOOOOOO")
            conn.release();
        })




    
    // res.json(responseData)
})



router.post('/test/post', (req, res) => {
    console.log(req.body.id);
    pool.getConnection()
        .then(conn => {
            console.log("INSERT DATA")
            conn.query(`INSERT INTO todo_table values (${req.body.id}, 'test', '2020-09-08', 0, 0, 0)`);
        })
        .catch(err => {
            console.log(err)
            console.log("NOOOOOOOOOOOOOOOOOOOOOOO")
            conn.release();
        })

})




// pool.getConnection()
//     .then (conn => {
//         console.log("Connect MariaDB!")
//         conn.query('select id, task from todo_table')
//         .then(rows => {
//             console.log(rows);
//             res.send(ejs.render(data, {prodList : results}))
//             // return conn.query("INSERT INTO todo_table values (8, 'task', '2020-09-08', 1, 0, 0)");
//         })
//         .catch(err => {
//             conn.release();
//         })
//     })
//     .catch(err => {
//         console.log(err)
//         conn.release();
//     })


// router.get('/', (req, res) =>{
//     fs.readFile(__dirname + '/list.html', 'utf8') 
//     pool.getConnection()
//         .then (conn => {
//             conn.query('select id, task from todo_table')
//             .then(rows => {
//                 res.send(ejs.render(conn, {prodList:rows}))
//             })
//         })
// })

const path = require('path');
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

//     // ROUTER
// const path = require('path');
// router.get('/form', (req, res) => {
//     // const sql = "select is from todo_table";
//     pool.getConnection()
//         .then (conn => {
//             conn.query('select id, task from todo_table')
//             .then(rows => {
//                 res.render("/views/index.html", {topics: rows});
//             })
//         })
//     // res.sendFile(path.join(__dirname, '../views/index.html'));
// })





// router.post('/ajax', (req, res) => {
//     const responseData = {};
//     pool.getConnection()
//         .then (conn => {
//             console.log("Connect MariaDB!")
//             conn.query('select due_date from todo_table')
//                 .then(rows => {
//                     console.log(rows[0].due_date);
//                     responseData.due_data = rows[0].due_date;
//                 })
//                 .catch(err => {
//                     console.log("None");
//                     responseData.due_data = "";
//                     // conn.release();
//                 })
//                 res.json(responseData)
//         })
//         .catch(err => {
//             console.log(err)
//             conn.release();
//         })
// })





// connection.query(`select * from todo_table where id = :id`, function(err, result) {
//   const id = param.id;

//   query.mapping('id', param.id)
//   console.log("test");
//   console.log(result); 
//   console.log(err);
// })

module.exports = router;