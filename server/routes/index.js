const { Router } = require("express");
const mainController = require("../controllers/mainController.js");

const router = Router();

router.get("/", mainController.home);
router.get("/about", mainController.about);

module.exports = router;
