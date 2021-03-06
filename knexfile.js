require('dotenv').config();

  module.exports = {

    development: {
      client: 'pg',
      connection: process.env.LOCAL_DATABASE
    },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL + '?ssl=true'
    }
  };
