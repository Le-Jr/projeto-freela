const hdbs = require('express-handlebars');
const express = require('express');
const router = require('./router/router')
const db = require('./db/conn')
var flash = require('express-flash')
const session = require('express-session');


const app = express();

const port = 3000


app.use(express.static('public'))
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.engine('handlebars', hdbs.engine());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', "handlebars");
app.use('/', router)

db.sync().then(() => {
    app.listen(3000)
}).catch((err) => { console.log(err) })