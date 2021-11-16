require('dotenv').config();

module.exports = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      // query:{raw:true}
    },
    test: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      // query:{raw:true}
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      // query:{raw:true}
    }
};