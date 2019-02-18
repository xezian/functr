const fs = require("fs");
const refreshFile = require("./refresh-file");

const testFunctr = data => {
  return new Promise((res, rej) => {
    console.log(data);
    refreshFile("./methods/tmp/functr.js")
      .then(() => {
        fs.appendFile("./methods/tmp/functr.js", data.code + "\n", err => {
          if (err) {
            rej(err);
          }
          fs.appendFile(
            "./methods/tmp/functr.js",
            `const testFunc = () => {
  const result = functr();
  return result;
};
module.exports = testFunc;
`,
            async err => {
              if (err) {
                rej(err);
              }
              const functr = await require("./tmp/functr.js");
              const results = await functr();
              console.log(results);
              res(results);
            }
          );
        });
      })
      .catch(err => {
        rej(err);
      });
  }).catch(err => {
    console.log(err);
  });
};

module.exports = testFunctr;
