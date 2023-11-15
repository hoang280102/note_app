const { Router } = require("express");
const dashboardController = require("../controllers/dashboardController.js");
const isLoggedIn = require("../middleware/checkAuth.js");
const router = Router();

router.get("/dashboard", isLoggedIn, dashboardController.dashboard);
router.get(
  "/dashboard/item/:id",
  isLoggedIn,
  dashboardController.dashboardViewNote
);
router.put(
  "/dashboard/item/:id",
  isLoggedIn,
  dashboardController.dashboardUpdateNote
);
router.delete(
  "/dashboard/item-delete/:id",
  isLoggedIn,
  dashboardController.dashboardDeleteNote
);
router.get("/dashboard/add", isLoggedIn, dashboardController.dashboardAddeNote);
router.post(
  "/dashboard/add",
  isLoggedIn,
  dashboardController.dashboardAddeNoteSubmit
);
router.get(
  "/dashboard/search",
  isLoggedIn,
  dashboardController.dashboardSearch
);
router.post(
  "/dashboard/search",
  isLoggedIn,
  dashboardController.dashboardSearchSubmit
);
module.exports = router;
