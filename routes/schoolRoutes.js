const express = require("express");
const schoolController = require("../controllers/schoolController");
const schoolRouter = express.Router();

schoolRouter.route("/").get(schoolController.getAllSchools);

schoolRouter.route("/limit/:id").get(schoolController.getAllSchoolsPaginated)

schoolRouter.route("/find/").get(schoolController.getSchoolInfo);

module.exports = schoolRouter;