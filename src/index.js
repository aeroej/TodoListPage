const { query } = require('express');
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}`);
});



app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});

// mysql
const mysql= require('mysql');
const connection = mysql.createConnection({
  host     : '192.168.1.70',
  port : 5507,
  user     : 'ejkim',
  password : 'ejkim',
  database : 'my_todo'
});
connection.connect();

connection.query('select task from todo_table where id=1', function(err, result) {
  console.log(result);
  console.log(JSON.stringify(result)); 
  // console.log(err);
})



// connection.query(`select * from todo_table where id = :id`, function(err, result) {
//   const id = param.id;

//   query.mapping('id', param.id)
//   console.log("test");
//   console.log(result); 
//   console.log(err);
// })

