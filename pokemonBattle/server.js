const express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let path = require('path');

require('./api/api')(app);

app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.get("*", (request, response) => {
    response.sendFile(path.resolve('public/dist/index.html'));
})


app.listen(8000, ()=> console.log("Server listening in port 8000"));