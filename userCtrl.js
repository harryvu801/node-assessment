var users = require('./users.js')
var userData = require('./lib/userData.js')


module.exports = {

  readAll: function (){
    return users.find();
  },

  findUserById: function (id){
    return users.findOne('id', id*1 );
  },

  getAdmins: function (){
    return users.find('type','admin');
  },

  getNonAdmins: function () {
    return users.find('type','user' )
  },

  getUsersByFavorite: function (favorite) {
    return users.find('favorite', favorite)
  },

  getUsersByAgeLimit: function (age) {
    return users.find('age', age )
  },

  findUserByQuery: function (qr, val) {
    let ln = val.charAt(0).toUpperCase() + val.toLowerCase().slice(1);
    if (qr === 'email') {
      return users.find('email', val)
    };

    return users.find(qr, ln);

  },

  createUser: function (obj) {
    return users.add(obj);
  },

  updateUser: function (val, update){
    return users.update('id', val, update)
  },

  removeUser: function (value) {
    return users.remove('id', value)
  }

}
