const sqlconnection = require('../../sqlite');

const usersTable = require('./createUsers');

async function migrationsRun() {
  const schemas = [
    usersTable,
  ].join('');

  sqlconnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error));
}

module.exports = migrationsRun;