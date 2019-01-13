const fs = require("fs");

const testFunction = data => {
  console.log(data);
  return new Promise((res, rej) => {
    refreshFile()
      .then(responz => {
        fs.appendFile("./methods/tmp/test.js", data.code + "\n", err => {
          if (err) {
            rej(err);
          }
          fs.appendFile(
            "./methods/tmp/test.js",
            `const testFunc = () => {
  const result = ${data.funcName}(${data.args});
    if (result === ${data.expects}){
      return 'YES! results: ' + result + ' === ${data.expects}';
    } else {
      return 'NO! results: ' + result + ' !== ${data.expects}'; 
    };
  };
module.exports = testFunc;
`,
            async err => {
              if (err) {
                rej(err);
              }
              const test = await require("./tmp/test.js");
              const results = await test();
              console.log(results);
              res(results);
            }
          );
        });
      })
      .catch(err => {
        rej(err);
      });
  });
};

function refreshFile() {
  return new Promise((res, rej) => {
    fs.writeFile(
      "./methods/tmp/test.js",
      `const assert = require('chai').assert;`,
      err => {
        if (err) {
          rej(err);
        }
        res();
      }
    );
  });
}

module.exports = testFunction;
