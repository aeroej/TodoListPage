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



// ejs template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

