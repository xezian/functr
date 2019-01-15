const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const testFunction = require("./methods/test-function").testFunction;
const refreshFile = require("./methods/test-function").refreshFile;
const app = express();
const port = 3000;

const staticPath = path.join(__dirname, "/public");

app.use(express.static(staticPath));
app.use(bodyParser.json());

app.get("/*", (req, res) => {
  refreshFile().then(()=>{
    res.redirect("index.html");
  }).catch(err=>{
    console.log(err);
  })
});
app.post("/api/testfunction", (req, res) => {
  testFunction(req.body)
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
