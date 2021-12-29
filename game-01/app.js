const process = require('process')
let m = process.argv[2]
const n = process.argv[3]

m = m.split(',').map(item => parseInt(item, 10))
sumaEnteros = (val1, val2) => {
    let sub = []
    for (let i = 0; i < val1.length; i++) {
        for (let j = 0; j < val1.length; j++) {
            if ((val1[i] != val1[j])) {
                if ((val1[i] + val1[j]) == val2) {
                    sub.push(val1[i]);
                    sub.push(val1[j]); 
                    return console.log(sub)   
                }
            }
        }
    }
    return console.log('I did not find two values ​​for the sum')
}
sumaEnteros(m,n)