const express = require('express');
const app = express();

// port
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}`);
});

// app.use
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// STATIC
app.use('/api', express.static(__dirname + '/api'))
app.use('/assets', express.static(__dirname + '/assets'))
app.use('/router', express.static(__dirname + '/router'))
app.use('/views', express.static(__dirname + '/views'))

// ROUTER
const main = require('./router/index.js')
app.use('/', main)




app.set('views', __dirname + '/router');
app.set('view engine', 'ejs');







// index.ejs에서 <script src="/api/api.js"></script>
app.get('/api', function(req,res){
  res.sendFile(__dirname + "/router/ajax.js")
})