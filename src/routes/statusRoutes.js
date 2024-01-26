const express = require("express");
const app = express();
const router = express.Router();
//controllers import
const enrollController = require("../controllers/enrollController");
const homeController = require("../controllers/homeController");
const testController = require("../controllers/testController");
//This is home route
router.get("/", homeController);
router.post("/enroll", enrollController);
router.get("/test", testController);

//This is enroll routes
router.post("/enroll", enrollController);

module.exports = router;
