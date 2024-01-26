const { getDb } = require("../utils/connectDb");
const { ObjectId } = require("mongodb");
const enrollController = async (req, res) => {
  const body = req.body;
  if (body) {
    let db = getDb();
    //mark student collection
    const studentCollection = db.collection("students");
    const studentInsertResult = await studentCollection.insertOne(body);
    const studentId = studentInsertResult.insertedId;
    const studentIdString =
      studentId instanceof ObjectId ? studentId.toHexString() : studentId;
    //mark student collection
    const attendanceData = {
      _id: studentIdString,
      attandence: [
        {
          status: 0, //0 means absent, 1 means
          day: "Sun",
          date: "",
          subject: [
            {
              name: "subject_name",
              description: "",
            },
            {
              name: "",
              description: "",
            },
          ],
        },
        {
          day: "Mon",
          status: 0, //0 means absent, 1 means
          date: "",
          subject: [
            {
              name: "subject_name",
              description: "",
            },
            {
              name: "",
              description: "",
            },
          ],
        },
        {
          day: "Tue",
          status: 0,
          date: "",
          subject: [
            {
              name: "subject_name",
              description: "",
            },
            {
              name: "",
              description: "",
            },
          ],
        },
        {
          day: "Wed",
          status: 0,
          date: "",
          subject: [
            {
              name: "subject_name",
              description: "",
            },
            {
              name: "",
              description: "",
            },
          ],
        },
        {
          day: "Thur",
          status: 0,
          date: "",
          subject: [
            {
              name: "subject_name",
              description: "",
            },
            {
              name: "",
              description: "",
            },
          ],
        },
        {
          day: "Fri",
          status: 0,
          date: "",
          subject: [
            {
              name: "subject_name",
              description: "",
            },
            {
              name: "",
              description: "",
            },
          ],
        },
        {
          day: "Sat",
          status: 0,
          date: "",
          subject: [
            {
              name: "subject_name",
              description: "",
            },
            {
              name: "",
              description: "",
            },
          ],
        },
      ],
    };
    const attendenceCollection = db.collection("attendence");
    const attendenceInsertResult = await attendenceCollection.insertOne(
      attendanceData
    );
    const attendenceId = attendenceInsertResult.insertedId;
    res.status(200).json({ message: "Enrollment Successfull!!!" });
  } else {
    res.status(404).json({ message: "data not found" });
  }
};

module.exports = enrollController;
