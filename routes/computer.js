const express = require("express");
const router = express.Router();
const {
  getComputers,
  getOneComputer,
  addComputer,
  updateComputer,
  deleteComputer,
} = require("../controller/computer");

router.route("/").get(getComputers).post(addComputer);
router
  .route("/:id")
  .get(getOneComputer)
  .patch(updateComputer)
  .delete(deleteComputer);

module.exports = router;
