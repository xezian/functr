const fs = require("fs");

const refreshFile = (file) => {
    return new Promise((res, rej) => {
      fs.writeFile(
        file,
        `// this is a new file\n`,
        err => {
          if (err) {
            rej(err);
          }
          res();
        }
      );
    });
  }

  module.exports = refreshFile;