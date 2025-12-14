
const db = require('../database');

const opiskelija = {

  getAll: function (callback) {
    db.query('SELECT * FROM opiskelija', callback);
  },

  getOne: function (idOpiskelija, callback) {
    db.query(
      'SELECT * FROM opiskelija WHERE idOpiskelija = ?',
      [idOpiskelija],
      callback
    );
  },


  add: function (op, callback) {
    db.query(
      'INSERT INTO opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) VALUES (?, ?, ?, ?)',
      [op.Etunimi, op.Sukunimi, op.Osoite, op.Luokkatunnus],
      callback
    );
  },

  update: function (idOpiskelija, op, callback) {
    db.query(
      'UPDATE opiskelija SET Etunimi = ?, Sukunimi = ?, Osoite = ?, Luokkatunnus = ? WHERE idOpiskelija = ?',
      [op.Etunimi, op.Sukunimi, op.Osoite, op.Luokkatunnus, idOpiskelija],
      callback
    );
  },

  delete: function (idOpiskelija, callback) {
    db.query(
      'DELETE FROM opiskelija WHERE idOpiskelija = ?',
      [idOpiskelija],
      callback
    );
  }
};

module.exports = opiskelija;
