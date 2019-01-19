const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const assembleAndTestFunction = require("./methods/test-function");
const app = express();
const port = 6789;

const staticPath = path.join(__dirname, "/public");

app.use(express.static(staticPath));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("index");
});
app.post("/api/testfunction", (req, res) => {
  assembleAndTestFunction(req.body)
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
