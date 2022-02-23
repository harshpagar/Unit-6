const express = require("express");
const connect = require("./configs/db");
const app = express();


const adminController = require("./controllers//admin.controller");
const teacherController = require("./controllers/teacher.controller");
const classController = require("./controllers/class.controller");

app.use(express.json());

app.use("/admin", adminController);
app.use("/teacher", teacherController);
app.use("/class", classController);


const start = async () => {
  await connect();

  app.listen(5000, () => {
    console.log("Lisning to port 5000");
  });
};

module.exports = start;