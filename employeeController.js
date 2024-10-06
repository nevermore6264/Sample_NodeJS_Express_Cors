// employeeController.js

// Sample data
let items = [
  {
    id: 1,
    fullName: "John Doe",
    emailId: "johndoe@example.com",
    salary: 5000,
    city: "New York",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    emailId: "janesmith@example.com",
    salary: 6000,
    city: "Los Angeles",
  },
  {
    id: 3,
    fullName: "Mike Johnson",
    emailId: "mikejohnson@example.com",
    salary: 4500,
    city: "Chicago",
  },
];

// Create
const insertEmployee = (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
};

// Read
const getAllEmployees = (req, res) => {
  res.json(items);
};

// Update
const updateEmployee = (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;
  items = items.map((item) => (item.id === itemId ? updatedItem : item));
  res.json(updatedItem);
};

// Delete
const deleteEmployee = (req, res) => {
  const emailId = req.params.emailId;
  items = items.filter((item) => item.emailId !== emailId);
  res.sendStatus(204);
};

module.exports = {
  insertEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
};
