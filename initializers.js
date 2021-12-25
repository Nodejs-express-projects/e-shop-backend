const winston = require('winston');


module.exports =  {

    logger:startlogging()

}

function startlogging(){

    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'shop-service' }
      });

      return logger;

}

