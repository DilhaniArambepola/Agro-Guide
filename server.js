const cors = require('cors');
const express = require('express');
const router = express.Router();
var login = require('./server/routes/loginroutes');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mysql = require('mysql');
// var session = require('express-session');
// const cookieParser = require('cookie-parser');

var fs = require('fs');

// var crypto = require('crypto');


// API file for interacting with MongoDB
const api = require('./server/routes/api');

const TWO_HOURS = 1000 * 60 * 60 * 2;

const {
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = 'ssh!quiet,it\'ascecret!',
    SESS_LIFETIME = TWO_HOURS
} = process.env

// var login = require('./routes/loginroutes');

const port = process.env.PORT || '3000';

const app = express();
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agroguide'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Parsers
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Enable the cors options
var corsOptions = {
    allRoutes: true,
    Origin: '*',
    optionsSuccessStatus: 200
}

// module.exports.cors = {
//     allRoutes: true,
//     origin: '*',
//     credentials: true,
//     methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
//     headers: 'content-type'
// };

app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

// API location
app.use('/api', api);

app.set('trust proxy', 1);

// app.use(session({
//     name: SESS_NAME,
//     resave: false,
//     saveUninitialized: false,
//     secret: SESS_SECRET,
//     cookie: {
//         maxAge: SESS_LIFETIME,
//         sameSite: true,
//         secure: true
//     }
// }));

// var router = express.Router();

// //route to handle user registration
// router.post('/register',login.register);
// router.post('/login',login.login);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, function(){
    console.log("Server running on port "+port);
});