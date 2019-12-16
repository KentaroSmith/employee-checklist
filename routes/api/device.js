const router = require("express").Router();
const deviceController = require("../../controllers/employeeController");

// for posting and retrieving: /api/employee
router.route("/")
.get(deviceController.findAllDevices)
.post(deviceController.createDevice)
// for deleting 
router.route("/:id")
.get(deviceController.findDeviceById)
.delete(deviceController.removeDevice)

module.exports = router;