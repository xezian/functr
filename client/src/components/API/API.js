import axios from "axios";

export default {
  submitCode: code => {
    return new Promise((res, rej) => {
      const dataPkg = {
        code: code
      };
      const strung = JSON.stringify(dataPkg);
      axios
        .post("/api/testfunctr", strung, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(resp => {
          res(resp);
        })
        .catch(err => {
          rej(err);
        });
    });
  },
  refresh: () => {
    return new Promise((resolve, rej) => {
      axios
        .get("/api/refresh")
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          rej(err);
        });
    });
  }
};
