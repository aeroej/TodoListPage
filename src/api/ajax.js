window.onload = getData();


const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '192.168.1.70',
    port: 5507,
    user: 'ejkim',
    password: 'ejkim',
    database: 'my_todo'
});



function getData() {
    document.querySelector('.ajax').addEventListener('click', function () {
        var input = document.forms[0].elements[0].value;
        var url = 'http://192.168.1.70:3001/test/ajax';
        var inputData = { 'id': input }
        inputData = JSON.stringify(inputData);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', "application/json");
        xhr.send(inputData);

        
        const mariadb = require('mariadb');
        const pool = mariadb.createPool({
            host: '192.168.1.70',
            port: 5507,
            user: 'ejkim',
            password: 'ejkim',
            database: 'my_todo'
        });





        xhr.addEventListener('load', function () {
            console.log(xhr.responseText);

            var result = JSON.parse(xhr.responseText);
            if (result.result != "ok") return;
            var resultData = "Result : " + result.result + " ID : " + result.id;
            document.querySelector(".result").innerHTML = resultData;
        });
    })
}








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