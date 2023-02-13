const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTasks,
  createTask,
} = require("../controller/taskController");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTasks);

module.exports = router;
 