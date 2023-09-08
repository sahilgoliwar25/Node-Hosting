const arr = require("../dummydata");

const data = (req, res) => {
  //logic
  res.send(arr);
};
const specdata = (req, res) => {
  //logic
  const id = req.params.id;
  res.send(id);
};

module.exports = { data, specdata };
