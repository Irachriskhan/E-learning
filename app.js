const express = require("express");
const app = express();
const computer = require("./routes/computer");

// controller => router  => app.js => browser
app.use(express.json());
app.use("/alight/acs", computer);

// app.get("/alight/acs/", getComputers); // get all devices
// app.get("/alight/acs/:id", getOneComputer); // get one computer
// app.post("/alight/acs/", addComputer); // add computer
// app.patch("/alight/acs/:id", updateComputer); // update computer
// app.delete("/alight/acs/:id", deleteComputer); // delete computer

app.listen(9000, () => {
  console.log("Server is running");
});
