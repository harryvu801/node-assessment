const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userCtrl = require('./userCtrl.js');
const users = require('./users.js');
const cors = require('cors')


app.use(cors());
app.use(bodyParser.json());


app.get('/api/users', userCtrl.readAll);
app.get('/api/users/:id', userCtrl.findUserById);
app.get('/api/admins', userCtrl.getAdmins);
app.get('/api/nonadmins', userCtrl.getNonAdmins);
app.put('/api/users/:id', userCtrl.updateUser);
app.post('/api/users/', userCtrl.createUser);
app.delete('/api/users', userCtrl.removeUser)

app.listen(3000, ()=>{console.log('listen');})


module.exports = app;
