const express = require("express");
const router = express.Router();
const employeeController = require("./employeeController");

// Create
router.post("/employee/insert", employeeController.insertEmployee);

// Read
router.get("/employee/get-all", employeeController.getAllEmployees);

// Update
router.put("/employee/update/:id", employeeController.updateEmployee);

// Delete
router.delete("/employee/delete/:emailId", employeeController.deleteEmployee);

module.exports = router;
