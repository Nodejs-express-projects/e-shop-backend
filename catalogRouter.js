module.exports = async (app, url, logger) => {
  const db = await require("./database/databaseConnectionClient")(url, logger);

  const catalog = db.collection("catalog");

  app.get("/catalog/:id", async function (request, reply, next) {
      const data = await catalog.findOne({name:"test-post"})
    reply.send(data);
    next();
  });

  app.post("/catalog", async function (request, reply, next) {
    const { data } = request.body;

    await catalog.insertOne({ name: "test-post" });

    reply.send({ attach: true });

    next();
  });

  app.put("/catalog", async function (request, reply, next) {
    //const { data } = request.body;

   // await catalog.insertOne({ name: "test-post" });

  //  reply.send({ attach: true });

    next();
  });


  app.delete("/catalog/:id", async function (request, reply, next) {
    //const { data } = request.body;

   // await catalog.insertOne({ name: "test-post" });

  //  reply.send({ attach: true });

    next();
  });


};
