const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://ravidtg3:TqvgelUc0BKTveox@status-cluster.fqnjkil.mongodb.net/?retryWrites=true&w=majority";

let dbConnection;

module.exports = {
  connectToDb: async (cb) => {
    try {
      const client = new MongoClient(uri);
      await client.connect();
      dbConnection = client.db("status");
      return cb();
    } catch (error) {
      console.error(error);
      return cb(error);
    }
  },
  getDb: () => {
    return dbConnection;
  },
};
