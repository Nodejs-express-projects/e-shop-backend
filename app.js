const express = require('express')
const app = express()
const startcatalogrouter = require('./catalogRouter');
const {logger} = require('./initializers')
const startdatabase = require('./database/databaseConnectionClient')
const router = express.Router();
const {PORT,MONGODB_URL=`mongodb://root:root@localhost:27017`} = process.env;

startdatabase(MONGODB_URL,logger);
startcatalogrouter(router);

app.use(router);

app.listen(PORT || 3000,() => {
    logger.info(`App listening to port,${PORT || 3000}`)
})