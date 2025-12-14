const db = require('../database');


const arviointi = {

  getAll: function (callback) {
    db.query('SELECT * FROM arviointi', callback);
  },


  getOne: function (idArviointi, callback) {
    db.query(
      'SELECT * FROM arviointi WHERE idArviointi = ?',
      [idArviointi],
      callback
    );
  },


  add: function (arv, callback) {
    db.query(
      'INSERT INTO arviointi (Paivamaara, Arvosana, idOpiskelija, idOpintojakso) VALUES (?, ?, ?, ?)',
      [arv.Paivamaara, arv.Arvosana, arv.idOpiskelija, arv.idOpintojakso],
      callback
    );
  },


  delete: function (idArviointi, callback) {
    db.query(
      'DELETE FROM arviointi WHERE idArviointi = ?',
      [idArviointi],
      callback
    );
  },

  update: function (idArviointi, arv, callback) {
    db.query(
      'UPDATE arviointi SET Paivamaara = ?, Arvosana = ?, idOpiskelija = ?, idOpintojakso = ? WHERE idArviointi = ?',
      [arv.Paivamaara, arv.Arvosana, arv.idOpiskelija, arv.idOpintojakso, idArviointi],
      callback
    );
  }
};

module.exports = arviointi;
