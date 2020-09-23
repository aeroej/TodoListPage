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