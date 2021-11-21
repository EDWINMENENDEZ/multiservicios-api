const express = require('express');
const morgan = require('morgan');
const cors= require("cors");
const app = express();

//cors settings
var corsOptions={
    origin: '*'
    ,method: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    ,preflightContinue: false
    ,optionsSuccessStatus:200
}

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//int DB
const db= require('./app/model/index');
db.sequelize.sync();
////recronstruir los Objetos
//db.sequelize.sync({force:true});

// routes
app.use(require('./app/routes/index'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});