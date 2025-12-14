const db = require('../database');

const opintojakso = {

  getAll: function (callback) {
    db.query('SELECT * FROM opintojakso', callback);
  },


  getOne: function (idOpintojakso, callback) {
    db.query(
      'SELECT * FROM opintojakso WHERE idOpintojakso = ?',
      [idOpintojakso],
      callback
    );
  },


  add: function (oj, callback) {
    db.query(
      'INSERT INTO opintojakso (Koodi, Laajuus, Nimi) VALUES (?, ?, ?)',
      [oj.Koodi, oj.Laajuus, oj.Nimi],
      callback
    );
  },


  update: function (idOpintojakso, oj, callback) {
    db.query(
      'UPDATE opintojakso SET Koodi = ?, Laajuus = ?, Nimi = ? WHERE idOpintojakso = ?',
      [oj.Koodi, oj.Laajuus, oj.Nimi, idOpintojakso],
      callback
    );
  },


  delete: function (idOpintojakso, callback) {
    db.query(
      'DELETE FROM opintojakso WHERE idOpintojakso = ?',
      [idOpintojakso],
      callback
    );
  }
};

module.exports = opintojakso;
