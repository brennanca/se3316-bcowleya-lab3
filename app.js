var msg = 'Hello World';
console.log(msg);


const fs = require('fs');
const csv = require('csv-parser');


let data = [];
fs.createReadStream('lab3-data 2/raw_artists.csv')
.pipe(csv())
.on('data', (rows) => {
    console.log(rows);
    //data.push(rows);
})

// .on('end', () => {
//     console.table(data);

//     // const result = data.filter((row) => {
//     //     return row.gender == 'Female'
//     // })

//     // console.log(result);
// })
