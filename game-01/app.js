const process = require('process')
let m = process.argv[2]
const n = process.argv[3]
m = m.split(',').map(item => parseInt(item, 10))
subsetSum = (val1, val2) => {
    let sub = []; x = []
    val1.map( result => x.push(val2-result))
    for(let i = 0; i < x.length; i++){
        let result = val1.find(element => element == x[i])
        if(result){sub.push(val1[i]); sub.push(result); return console.log(sub)}
    }
    return console.log('I did not find two values for the sum')
}
subsetSum(m,n)