const getComputers = (req, res) => {
  res.send("This is the store of our computers.");
};

const getOneComputer = (req, res) => {
  res.send("We get one computer only!");
};

const addComputer = (req, res) => {
  // res.send("One computer is added!");
  res.json(req.body);
  console.log(req.body);
};

const updateComputer = (req, res) => {
  // res.send("We update one computer!");
  res.json({ id: req.params.id });
};

const deleteComputer = (req, res) => {
  // res.send("One computer is deleted");
  res.json({ id: req.params.id });
};

module.exports = {
  getComputers,
  getOneComputer,
  addComputer,
  updateComputer,
  deleteComputer,
};
