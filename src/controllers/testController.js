const { getDb } = require("../utils/connectDb");

const testController = async (req, res) => {
  try {
    const db = getDb();
    const response = await db.collection("students").find({}).toArray();
    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error);
  }
};
module.exports = testController;
