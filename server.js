const express = require('express');
const app = express();

// app.get()
// app.post()
// app.put()
// app.delete()

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4]);
})

app.get('/api/courses/:id', (req, res) => {
    res.send(req.query);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port'));


const fs = require('fs');
const csv = require('csv-parser');


// let data = [];
// fs.createReadStream('lab3-data 2/raw_artists.csv')
//     .pipe(csv())
//     .on('data', (rows) => {
//     //console.log(rows);
//     data.push(rows);
//     }).on('end', () => {
//         //console.log(data)
//     });




var artistArray = []; 
fs.createReadStream("lab3-data 2/raw_artists.csv").pipe(csv({})).on("data", (data) => artistArray.push(data)).on("end", () => {/console.log(artistArray)/});



//create new json object for artist details



console.log(artistArray.find(element => element.artist_id == 10127));

app.get('/artist/:id', (req, res) => {
    

    const artist = artistArray.find(element => element.artist_id == parseInt(req.params.id));

    const jsonArtist = {
        artistID: artist.artist_id,
        artistHandle: artist.artist_handle,
        artistContact: artist.artist_contact,
        artistLocation: artist.artist_location,
        artistName: artist.artist_name,
        artistURL: artist.artist_url,
        artistWebsite: artist.artist_website

    }
    res.json(jsonArtist);
});
