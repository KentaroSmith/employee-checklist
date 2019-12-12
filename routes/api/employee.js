const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// for posting and retrieving: /api/employee
router.route("/")
.get(employeeController.findAll)
.post(employeeController.create)
// for deleting 
router.route("/:id")
.get(employeeController.findById)
.delete(employeeController.remove)

module.exports = router;