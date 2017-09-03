const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todofancy');
const cors = require('cors');



const app = express();
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
