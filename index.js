const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const testFunction = require("./methods/test-function");
const testFunctr = require("./methods/test-functr");
const refreshFile = require("./methods/refresh-file");
const app = express();
const port = 6789;

const staticPath = path.join(__dirname, "/public");

app.use(express.static(staticPath));
app.use(bodyParser.json());

app.get("/api/refresh", (req, res) => {
  refreshFile("./methods/tmp/test.js")
    .then(() => {
      console.log("refreshing test.js " + Date());
      refreshFile("./methods/tmp/functr.js")
        .then(() => {
          console.log("refreshing functr.js " + Date());
          res.send(`<a href="/">refreshed</a>`);
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
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

app.post("/api/testfunctr", (req, res) => {
  testFunctr(req.body)
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
