const express = require('express');

const app = express();

app.use('/', express.static('static'));

app.use(express.json());

var database = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "$Bunnysex69",
    database: "3316database"
});


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
fs.createReadStream("lab3-data 2/raw_artists.csv").pipe(csv({})).on("data", (data) => artistArray.push(data)).on("end", () => {console.log(artistArray)});

var trackArray = [];
fs.createReadStream("lab3-data 2/raw_tracks.csv").pipe(csv({})).on("data", (data) => trackArray.push(data)).on("end", () => {/console.log(trackArray)/});

var albumArray = [];
fs.createReadStream("lab3-data 2/raw_albums.csv").pipe(csv({})).on("data", (data) => albumArray.push(data)).on("end", () => {/console.log(albumArray)/});

//create new json object for artist details



console.log(artistArray.find(element => element.artist_id == 10127));

//artist get from artist name
app.get('/artist', (req, res) => {
    const tempArray = trackArray.filter(function (element) {
        if(this.count < 10 && element.artist_name.toString().toLowerCase().includes(req.query.artistNameDetails)) {
            this.count++;
            return true;
        }
        return false;
    }, { count: 0});

    let finalArray = [];
    for(x = 0; x < tempArray.length; x++) {
        const json = {
            artistName: tempArray[x].artist_name,
            artistID: tempArray[x].artist_id,
            artistHandle: tempArray[x].artist_handle,
            artistContact: tempArray[x].artist_contact,
            artistLocation: tempArray[x].artist_location,
            artistURL: tempArray[x].artist_url,
            artistWebsite: tempArray[x].artist_website,
            artistFavorites: tempArray[x].artist_favorites,
            artistDateCreated: tempArray[x].artist_date_created


        }
        finalArray.push(json);
    }

    res.send(finalArray);


});

//track from track name
app.get('/track', (req, res) => {
    const tempArray = trackArray.filter(function (element) {
        if(this.count < 10 && element.track_title.toString().toLowerCase().includes(req.query.trackNameDetails)) {
            this.count++;
            return true;
        }
        return false;
    }, { count: 0});

    let finalArray = [];
    for(x = 0; x < tempArray.length; x++) {
        const json = {
            trackTitle: tempArray[x].track_title,
            trackID: tempArray[x].track_id,
            trackDuration: tempArray[x].track_duration,
            trackListens: tempArray[x].track_listens,
            trackNumber: tempArray[x].track_number,
            trackInterest: tempArray[x].track_interest

        }
        finalArray.push(json);
    }

    res.send(finalArray);


});

//album from album name

app.get('/album', (req, res) => {
    const tempArray = albumArray.filter(function (element) {
        if(this.count < 10 && element.album_title.toString().toLowerCase().includes(req.query.albumNameDetails)) {
            this.count++;
            return true;
        }
        return false;
    }, { count: 0});

    let finalArray = [];
    for(x = 0; x < tempArray.length; x++) {
        const json = {
            albumTitle: tempArray[x].album_title,
            albumID: tempArray[x].album_id,
            albumReleased: tempArray[x].album_date_released,
            albumHandle: tempArray[x].album_handle,
            albumListens: tempArray[x].album_listens,
            albumTracks: tempArray[x].album_tracks

        }
        finalArray.push(json);
    }

    res.send(finalArray);


});



//artist get
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


//track get
app.get('/track/:id', (req, res) => {
    

    const track = trackArray.find(element => element.track_id == parseInt(req.params.id));

    const jsonTrack = {
        trackID: track.track_id,
        albumID: track.album_id,
        albumTitle: track.album_title,
        artistID: track.artist_id,
        artistName: track.artist_name,
        tags: track.tags,
        trackDateCreated: track.track_date_created,
        trackDateRecorded: track.track_date_recorded,
        trackDuration: track.track_duration,
        trackGenres: track.track_genres,
        trackNumber: track.track_number,
        trackTitle: track.track_title

    }
    res.json(jsonTrack);
});


// first 10 based on track title 
app.get('/track', (req, res) => {
    const tempArray = trackArray.filter(function (element) {
        if(this.count < 10 && element.track_title.toString().toLowerCase().includes(req.query.trackName)) {
            this.count++;
            return true;
        }
        return false;
    }, { count: 0});

    let finalArray = [];
    for(x = 0; x < tempArray.length; x++) {
        const json = {
            trackID: tempArray[x].track_id
        }
        finalArray.push(json);
    }

    res.send(finalArray);


});

//first 10 matching artist id
app.get('/artist', (req, res) => {
    
    const tempArray = artistArray.filter(function (element) {
        if(this.count < 10 && element.artist_name.toString().toLowerCase().includes(req.query.artistName)) {
            this.count++;
            return true;
        }
        return false;
    }, { count: 0});

    let finalArray = [];
    for(x = 0; x < tempArray.length; x++) {
        const json = {
            artistID: tempArray[x].artist_id
        }
        finalArray.push(json);
    }

    res.send(finalArray);
});


//lists 
app.get('/lists/:name', (req, res) => {

    
    

    database.query("CREATE TABLE ?? (trackID INT NULL,trackDuration INT NOT NULL,trackInterest VARCHAR(45) NULL,trackListens VARCHAR(45) NULL,trackNumber VARCHAR(45) NULL,trackTitle VARCHAR(45) NULL,PRIMARY KEY (trackDuration));", [listName]);
    

    // const newList = req.body;
    // console.log(newList);
    // newList.name = req.params.body;
    

    res.send(newList);
});

//save tracks to list


