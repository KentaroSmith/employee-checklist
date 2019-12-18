const router = require("express").Router();
const softwareController = require("../../controllers/employeeController");

// for posting and retrieving: /api/employee
router.route("/")
.get(softwareController.findAllSoftware)
.post(softwareController.createSoftware)
// for deleting 
router.route("/:id")
.get(softwareController.findSoftwareById)
.delete(softwareController.removeSoftware)

module.exports = router;