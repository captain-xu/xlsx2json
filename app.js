let xlsx = require('node-xlsx'),
    path = require('path'),
    fs = require('fs');

let output = {};
const workSheetsFromFile = xlsx.parse(`test.xlsx`);
const data = workSheetsFromFile[0].data

for (let i = 0; i < data.length; i++) {
    output[data[i][0]] = data[i][1]
}

fs.writeFile(path.join(__dirname, 'output.json'), JSON.stringify(output), (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('output success');
    }
});