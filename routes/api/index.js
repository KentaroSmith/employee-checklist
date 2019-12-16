const router = require("express").Router();

const employeeRoutes = require("./employee");
const deviceRoutes = require("./device")

router.use("/employee", employeeRoutes);
router.use("/device",deviceRoutes)
module.exports = router;