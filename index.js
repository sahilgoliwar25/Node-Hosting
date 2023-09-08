const express = require("express");
const route = require("./router/userRoutes");
const arr = require("./dummydata");

const app = express();

app.use(express.json()); //Body Parser

//this is used for application level middleware where it will validate on whole application level

app.get("/", (req, res) => {
  //   res.send("This is the Home Page. Please Route to /api/main for more details");
  res.send(
    "<html><body><h1>This is the Home Page. Please Route to /api/main for more details about ExpressJS.</h1></body></html>"
  );
});

app.get("/article", (req, res) => {
  res.send(arr);
});
app.use("/api", route);

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000/`);
});
