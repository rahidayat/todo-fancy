const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/todofancy', function(){
    /* Drop the DB */
    // mongoose.connection.db.dropDatabase();

    // Drop the 'users' collection from the current database
    // mongoose.connection.db.dropCollection('users', function(err, result) {
    //   if(!err) {
    //     console.log('berhasil drop collection users');
    //   }
    // });
})



const app = express();
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

let index = require('./routers/index');
let user = require('./routers/users');
let register = require('./routers/signup');
let login = require('./routers/signin');
let todo = require('./routers/todo');


app.use('/', index);
app.use('/users', user);
app.use('/signup', register);
app.use('/signin', login);
app.use('/todo', todo);


app.listen(process.env.PORT || 3000, function(){
  console.log('I am listening port 3000');
})
