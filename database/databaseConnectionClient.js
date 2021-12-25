const { MongoClient } = require("mongodb");
const { promisify } = require("util");
const { logger } = require("../initializers");

module.exports = async function (url, logger) {
  let client = null;
  let db = null;
  try {
    client = await checkconnection(url);
    if (client) {
      logger.info(`Database connection successful`);
      db = await client.db("eshop"); //create database
      createCollections(db);
    }
  } catch (err) {
    logger.info(`Database connection closed due to err:,${err}`);
    await client.close();
    throw err;
  }

  return db;
};

async function checkconnection(url) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, db) {
      if (err) {
        reject(err);
      }
      resolve(db);
    });
  });
}



async function createCollections(database) {
  const createcollection = promisify(database.createCollection);

  try {
    database.createCollection("catalog", function (err, rep) {
      logger.info("catalog Collection created");
    });

    database.createCollection("subcatalog", function (err, rep) {
      logger.info("subcatalog Collection created");
    });

    database.createCollection("product", function (err, rep) {
      logger.info("product Collection created");
    });
  } catch (err) {
    logger.info("close database eshop");
    database.close();
    throw err;
  }
}
