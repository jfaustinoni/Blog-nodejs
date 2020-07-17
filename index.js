const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
//view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(() => {
        console.log('Conexao feita com sucesso');
    }).catch((error) => {
        console.log(error);
    });

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(8080, () => {
    console.log('o servidor está rodando!');
});