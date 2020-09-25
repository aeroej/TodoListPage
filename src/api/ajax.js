window.onload = getData();
<<<<<<< HEAD
window.onload = deleteData();
=======


const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '192.168.1.70',
    port: 5507,
    user: 'ejkim',
    password: 'ejkim',
    database: 'my_todo'
});

>>>>>>> 2c3e0f25acddfa63509d1692608e93f0d2dd858f


function getData() {
    document.querySelector('.ajax').addEventListener('click', function () {
<<<<<<< HEAD
        var inputTask = document.forms[0].elements[0].value;
        var inputDate = document.forms[0].elements[1].value;
        var inputPriority = document.forms[0].elements[2].value;
        var url = 'http://192.168.1.70:3001/ajax';
        var inputData = { 'task': inputTask, 'date':inputDate, 'priority' :inputPriority }
=======
        var input = document.forms[0].elements[0].value;
        var url = 'http://192.168.1.70:3001/test/ajax';
        var inputData = { 'id': input }
>>>>>>> 2c3e0f25acddfa63509d1692608e93f0d2dd858f
        inputData = JSON.stringify(inputData);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', "application/json");
<<<<<<< HEAD
        xhr.send(inputData); 
        xhr.addEventListener('load', function () {
            console.log(xhr.responseText);

            var result = JSON.parse(xhr.responseText);
            if (result.result != "ok") return;
            var resultData = "Result : " + result.result + ", Add a Task : " + result.task;
            document.querySelector(".result").innerHTML = resultData;
        });
    })
}



function deleteData() {
    document.querySelector('.delete').addEventListener('click', function () {
        var deleteElements = document.getElementsByName("delete");

        var url = 'http://192.168.1.70:3001/delete';

        var inputData = new Array();
        deleteElements.forEach(function (item, index) {
            if (item.checked) {
                console.log(item.value);
                inputData.push(item.value)
            }
        });

        inputData = JSON.stringify(inputData);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', "application/json");
        xhr.send(inputData); 
        xhr.addEventListener('load', function () {
            /*
=======
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
>>>>>>> 2c3e0f25acddfa63509d1692608e93f0d2dd858f
            console.log(xhr.responseText);

            var result = JSON.parse(xhr.responseText);
            if (result.result != "ok") return;
<<<<<<< HEAD
            var resultData = "Result : " + result.result + ", Add a Task : " + result.ask;
            document.querySelector(".result").innerHTML = resultData;
            */
=======
            var resultData = "Result : " + result.result + " ID : " + result.id;
            document.querySelector(".result").innerHTML = resultData;
>>>>>>> 2c3e0f25acddfa63509d1692608e93f0d2dd858f
        });
    })
}








<<<<<<< HEAD


















// function deleteData() {    
//     document.querySelector('.delete').addEventListener('click', function () {
//         var deleteElements = document.getElementsByName("delete");

//         var url = 'http://192.168.1.70:3001/delete';

//         // var inputData = { 'task': input }
//         inputData = JSON.stringify(deleteElements);

//         // pool.getConnection()
//         //     .then (conn => {
//         //         console.log("Connect MariaDB!")
//         //         conn.query('select id, task from todo_table')
//         //         .then(rows => {
//         //             console.log(rows);
//         //             res.send(ejs.render(data, {prodList : results}))
//         //             // return conn.query("INSERT INTO todo_table values (8, 'task', '2020-09-08', 1, 0, 0)");
//         //         })
//         //         .catch(err => {
//         //             conn.release();
//         //         })
//         //     })
//         //     .catch(err => {
//         //         console.log(err)
//         //         conn.release();
//         //     })



//         var arr = new Array();
//         deleteElements.forEach(function(item, index){
//             if(item.checked){
//                 console.log(item.value);
//                 alert(item.value);
//                 arr.push(item.value)
//             }  
//         });

//         // var xhr = new XMLHttpRequest();
//         // xhr.open('GET', url)
//         // xhr.setRequestHeader('Content-Type', 'application/json');
//         // xhr.send(arr)
//         // alert(arr)
//     })
// }













        
=======
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
>>>>>>> 2c3e0f25acddfa63509d1692608e93f0d2dd858f
