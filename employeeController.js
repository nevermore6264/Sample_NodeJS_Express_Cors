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

  const lastItem = items[items.length - 1];
  newItem.id = parseInt(lastItem ? lastItem.id + 1 : 1); // Start with ID 1 if items is empty
  newItem.salary = parseInt(newItem.salary);

  items.push(newItem);
  res.status(201).json(newItem);
};

// Read
const getAllEmployees = (req, res) => {
  res.json(items);
};

// Get one
const getEmployee = (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);
  res.json(item);
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
  const id = parseInt(req.params.id);
  items = items.filter((item) => parseInt(item.id) !== id);
  res.sendStatus(204);
};

module.exports = {
  insertEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
