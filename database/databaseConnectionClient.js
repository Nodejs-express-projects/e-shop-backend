const { MongoClient } = require("mongodb");
const { promisify } = require("util");
const { logger } = require("../initializers");

module.exports = function (url, logger) {
  const client = createClient(url);
  try {
    await checkconnection(client);
  } catch (err) {
    logger.info(`Database connection closed due to err:,${err}`);
    await client.close();
  }

  const db = await client.db("eshop");

  createCollections(db);
};

function checkconnection(client) {
  await client.connect();
}

function createClient(url) {
  return new MongoClient(url);
}

function createCollections(database) {
  const createcollection = promisify(database.createCollection);

  try {
    await createcollection("catalog");
    logger.info("catalog Collection created");

    await createcollection("subcatalog");
    logger.info("subcatalog Collection created");

    await createcollection("product");
    logger.info("subcatalog Collection created");
  } catch (err) {
    logger.info("close database eshop");
    db.close();
    throw err;
  }
}
