const pool = require('./db');

function dbSetup() {
  pool.connect((err, client, done) => {
    if (err) throw err;
    client.query(`
      CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50),
        phone VARCHAR(15),
        x INT,
        y INT
      );
    `, (err, res) => {
      done();
      if (err) {
        console.log(err.stack);
      } else {
        console.log('Tabela criada com sucesso!');
      }
    });
  });
}

module.exports = dbSetup;
