window.onload = newElement();

const mariadb= require('mariadb');
const pool = mariadb.createPool({
  host     : '192.168.1.70',
  port : 5507,
  user     : 'ejkim',
  password : 'ejkim',
  database : 'my_todo'
});


const responseData = {};
    pool.getConnection()
        .then (conn => {
            console.log("Connect MariaDB!")
            conn.query('select due_date from todo_table')
                .then(rows => {
                    console.log(rows[0].due_date);
                    responseData.due_data = rows[0].due_date;
                })
                .catch(err => {
                    console.log("None");
                    responseData.due_data = "";
                    // conn.release();
                })
                res.json(responseData)
        })
        .catch(err => {
            console.log(err)
            conn.release();
        })