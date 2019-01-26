const fs = require("fs");
const refreshFile = require("./refresh-file");

const testFunctr = data => {
  return new Promise((res, rej) => {
    console.log(data);
    refreshFile("./methods/tmp/functr.js")
      .then(() => {
        res(data.code + " hello from backend");
      })
      .catch(err => {
        rej(err);
      });
  }).catch(err => {
    console.log(err);
  });
};

module.exports = testFunctr;
