require ('dotenv').config()
const express = require('express');
const path = require("path");
const routes = require('./routes/routes');
const connectToDB = require('./database/db');
const bodyParser = require('body-parser');


connectToDB();
const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);


app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`)
);