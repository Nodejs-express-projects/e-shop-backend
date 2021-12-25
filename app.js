const express = require('express')
const app = express()
const catrouter = require('./catalogRouter')

const initializer = require('./initializers')
const router = express.Router();
const PORT = 3000;
const {logger,database} = initializer;
database()

catrouter(router);



app.use(router);

app.listen(PORT,() => {
    logger.info(`App listening to port,${PORT}`)
})