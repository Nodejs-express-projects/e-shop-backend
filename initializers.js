const winston = require('winston');
const initializedatabase = require('./database/databaseConnectionClient')

module.exports =  {

    logger:initializelogging(),
    database:initializedatabase()

}

function initializelogging(){

    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'shop-service' }
      });

      return logger;

}

