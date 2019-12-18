const router = require("express").Router();

const employeeRoutes = require("./employee");
const deviceRoutes = require("./device");
const softwareRoutes = require("./software");

router.use("/employee", employeeRoutes);
router.use("/device",deviceRoutes);
router.use("/software",softwareRoutes);
module.exports = router;