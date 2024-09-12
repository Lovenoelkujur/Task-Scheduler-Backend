const express = require("express");
const taskContainer = require("../Controllers/task");

const router = express.Router();

// Get All Task
router.get("/task-list", taskContainer.getAllTask);

// Create Task
router.post("/create-task", taskContainer.createTask);

// Update Task by ID
router.put("/update-task/:id", taskContainer.updateTask);

// Delete Task by Id
router.delete("/delete-task/:id", taskContainer.deleteTask);

module.exports = router;