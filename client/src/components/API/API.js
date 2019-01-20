import axios from 'axios';

export default {
    submitCode: (code) => {
        return new Promise((res, rej)=> {
            const dataPkg = {
                code: code,
                // funcName: funcName,
                // args: args,
                // expects: expects
            };
            const strung = JSON.stringify(dataPkg);
            axios.post('/api/testfunctr', strung, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resp=>{
                res(resp);
            }).catch(err=>{
                rej(err);
            })

        })
    }
}