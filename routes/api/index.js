const router = require("express").Router();

const employeeRoutes = require("./employee");

router.use("/employee", employeeRoutes);

module.exports = router;