const hdbs = require('express-handlebars');
const express = require('express');
const router = require('./router/router')
const db = require('./db/conn')


const app = express()
const port = 3000



app.engine('handlebars', hdbs.engine());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', "handlebars");

app.use('/', router)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
db.sync().then(() => {
    app.listen(3000)
}).catch((err) => { console.log(err) })