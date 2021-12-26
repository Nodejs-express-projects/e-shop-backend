const express = require('express')
const app = express()
const startcatalogrouter = require('./catalogRouter');
const {logger} = require('./initializers')
const router = express.Router();
const {PORT,MONGODB_URL=`mongodb://root:root@localhost:27017`} = process.env;

app.use(express.json());
app.use(express.urlencoded())

startcatalogrouter(router,MONGODB_URL,logger);

app.use('/shop',router);

app.listen(PORT || 3000,() => {
    logger.info(`App listening to port,${PORT || 3000}`)
})