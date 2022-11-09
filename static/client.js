window.onload=function() {
    var buttonArtist = document.getElementById("artistSearch");
    buttonArtist.addEventListener('click', function (e) {
        e.preventDefault();
        const artistBox = document.getElementById("searchBarArtist").value;
        
    
        fetch("http://" + window.location.host + "/artist?artistNameDetails=" + artistBox, { method: 'GET', headers: new Headers({ 'Content-Type': 'application/json' }) })
            .then(res => res.json())
            .then(data => { 
                var divBox = document.getElementById("dataTable");
                if(divBox.hasChildNodes()) {
                    divBox.innerHTML = '';
                } 
                var table = document.createElement('table');
                
                
                divBox.appendChild(table);

                

                let artistRow = document.createElement('tr');
                table.appendChild(artistRow);

                let tableHeader1 = document.createElement('th');
                tableHeader1.appendChild(document.createTextNode("artistName"));
                artistRow.appendChild(tableHeader1);

                let tableHeader2 = document.createElement('th');
                tableHeader2.appendChild(document.createTextNode("artistID"));
                artistRow.appendChild(tableHeader2);

                let tableHeader3 = document.createElement('th');
                tableHeader3.appendChild(document.createTextNode("artistURL"));
                artistRow.appendChild(tableHeader3);

                let tableHeader4 = document.createElement('th');
                tableHeader4.appendChild(document.createTextNode("artistWebsite"));
                artistRow.appendChild(tableHeader4);

                for(let i = 0; i < data.length; i++) {
                    let tableRow = document.createElement('tr');
                    table.appendChild(tableRow);
                    for(let x = 0; x < 1; x++) {
                        let tableData = document.createElement('td');
                        tableRow.appendChild(tableData);
                        tableData.appendChild(document.createTextNode(data[Object.keys(data)[i]].artistName));

                        let tableData1 = document.createElement('td');
                        tableRow.appendChild(tableData1);
                        tableData1.appendChild(document.createTextNode(data[Object.keys(data)[i]].artistID));

                        let tableData2 = document.createElement('td');
                        tableRow.appendChild(tableData2);
                        tableData2.appendChild(document.createTextNode(data[Object.keys(data)[i]].artistURL));

                        let tableData3 = document.createElement('td');
                        tableRow.appendChild(tableData3);
                        tableData3.appendChild(document.createTextNode(data[Object.keys(data)[i]].artistWebsite));
                    }
                }


                //console.log(data);
            })
            .catch(err => console.log(err));
        
            
        
    });


    var buttonAlbum = document.getElementById("albumSearch");
    buttonAlbum.addEventListener('click', function (e) {
        e.preventDefault();
        const artistBox = document.getElementById("searchBarAlbum").value;
        
    
        fetch("http://" + window.location.host + "/album?albumNameDetails=" + artistBox, { method: 'GET', headers: new Headers({ 'Content-Type': 'application/json' }) })
            .then(res => res.json())
            .then(data => {
                var divBox = document.getElementById("dataTable");
                if(divBox.hasChildNodes()) {
                    divBox.innerHTML = '';
                } 
                var table = document.createElement('table');
                
                
                divBox.appendChild(table);

                let artistRow = document.createElement('tr');
                table.appendChild(artistRow);

                let tableHeader1 = document.createElement('th');
                tableHeader1.appendChild(document.createTextNode("albumHandle"));
                artistRow.appendChild(tableHeader1);

                let tableHeader2 = document.createElement('th');
                tableHeader2.appendChild(document.createTextNode("albumID"));
                artistRow.appendChild(tableHeader2);

                let tableHeader3 = document.createElement('th');
                tableHeader3.appendChild(document.createTextNode("albumListens"));
                artistRow.appendChild(tableHeader3);

                let tableHeader4 = document.createElement('th');
                tableHeader4.appendChild(document.createTextNode("albumReleased"));
                artistRow.appendChild(tableHeader4);

                let tableHeader5 = document.createElement('th');
                tableHeader5.appendChild(document.createTextNode("albumTitle"));
                artistRow.appendChild(tableHeader5);

                let tableHeader6 = document.createElement('th');
                tableHeader6.appendChild(document.createTextNode("albumTracks"));
                artistRow.appendChild(tableHeader6);

                for(let i = 0; i < data.length; i++) {
                    let tableRow = document.createElement('tr');
                    table.appendChild(tableRow);
                    for(let x = 0; x < 1; x++) {
                        let tableData = document.createElement('td');
                        tableRow.appendChild(tableData);
                        tableData.appendChild(document.createTextNode(data[Object.keys(data)[i]].albumHandle));

                        let tableData1 = document.createElement('td');
                        tableRow.appendChild(tableData1);
                        tableData1.appendChild(document.createTextNode(data[Object.keys(data)[i]].albumID));

                        let tableData2 = document.createElement('td');
                        tableRow.appendChild(tableData2);
                        tableData2.appendChild(document.createTextNode(data[Object.keys(data)[i]].albumListens));

                        let tableData3 = document.createElement('td');
                        tableRow.appendChild(tableData3);
                        tableData3.appendChild(document.createTextNode(data[Object.keys(data)[i]].albumReleased));

                        let tableData4 = document.createElement('td');
                        tableRow.appendChild(tableData4);
                        tableData4.appendChild(document.createTextNode(data[Object.keys(data)[i]].albumTitle));

                        let tableData5 = document.createElement('td');
                        tableRow.appendChild(tableData5);
                        tableData5.appendChild(document.createTextNode(data[Object.keys(data)[i]].albumTracks));
                    }
                }


                //console.log(data);
            })
            .catch(err => console.log(err));
        
            
        
    });


    var buttonTrack = document.getElementById("trackSearch");
    buttonTrack.addEventListener('click', function (e) {
        e.preventDefault();
        const artistBox = document.getElementById("searchBarTrack").value;
        
    
        fetch("http://" + window.location.host + "/track?trackNameDetails=" + artistBox, { method: 'GET', headers: new Headers({ 'Content-Type': 'application/json' }) })
            .then(res => res.json())
            .then(data => { 
                var divBox = document.getElementById("dataTable");
                if(divBox.hasChildNodes()) {
                    divBox.innerHTML = '';
                } 
                var table = document.createElement('table');
                
                
                divBox.appendChild(table);

                let artistRow = document.createElement('tr');
                table.appendChild(artistRow);

                let tableHeader1 = document.createElement('th');
                tableHeader1.appendChild(document.createTextNode("trackDuration"));
                artistRow.appendChild(tableHeader1);

                let tableHeader2 = document.createElement('th');
                tableHeader2.appendChild(document.createTextNode("trackID"));
                artistRow.appendChild(tableHeader2);

                let tableHeader3 = document.createElement('th');
                tableHeader3.appendChild(document.createTextNode("trackInterest"));
                artistRow.appendChild(tableHeader3);

                let tableHeader4 = document.createElement('th');
                tableHeader4.appendChild(document.createTextNode("trackListens"));
                artistRow.appendChild(tableHeader4);

                let tableHeader5 = document.createElement('th');
                tableHeader5.appendChild(document.createTextNode("trackNumber"));
                artistRow.appendChild(tableHeader5);

                let tableHeader6 = document.createElement('th');
                tableHeader6.appendChild(document.createTextNode("trackTitle"));
                artistRow.appendChild(tableHeader6);


                for(let i = 0; i < data.length; i++) {
                    let tableRow = document.createElement('tr');
                    table.appendChild(tableRow);
                    for(let x = 0; x < 1; x++) {
                        let tableData = document.createElement('td');
                        tableRow.appendChild(tableData);
                        tableData.appendChild(document.createTextNode(data[Object.keys(data)[i]].trackDuration));

                        let tableData1 = document.createElement('td');
                        tableRow.appendChild(tableData1);
                        tableData1.appendChild(document.createTextNode(data[Object.keys(data)[i]].trackID));

                        let tableData2 = document.createElement('td');
                        tableRow.appendChild(tableData2);
                        tableData2.appendChild(document.createTextNode(data[Object.keys(data)[i]].trackInterest));

                        let tableData3 = document.createElement('td');
                        tableRow.appendChild(tableData3);
                        tableData3.appendChild(document.createTextNode(data[Object.keys(data)[i]].trackListens));

                        let tableData4 = document.createElement('td');
                        tableRow.appendChild(tableData4);
                        tableData4.appendChild(document.createTextNode(data[Object.keys(data)[i]].trackNumber));

                        let tableData5 = document.createElement('td');
                        tableRow.appendChild(tableData5);
                        tableData5.appendChild(document.createTextNode(data[Object.keys(data)[i]].trackTitle));
                    }
                }


                //console.log(data);
            })
            .catch(err => console.log(err));
        
            
        
    });


    var buttonPlaylist = document.getElementById("createPlaylist");
    buttonPlaylist.addEventListener('click', function (e) {
        e.preventDefault();
        const artistBox = document.getElementById("createBarList").value;
        
    
        fetch("http://" + window.location.host + "/lists/" + artistBox, { method: 'GET', headers: new Headers({ 'Content-Type': 'application/json' }) })
            .then(res => res.json())
            .then(data => {})
            .catch(err => console.log(err));
        
            
        
    });


    var buttonTrackPlaylist = document.getElementById("submitTracks");
    buttonTrackPlaylist.addEventListener('click', function (e) {
        e.preventDefault();
        const tracksToSend = document.getElementById("addTracks").value;
        const playListNumber = document.getElementById("addTracksPlaylist").value;
        var trackID = tracksToSend.toString().split(",");
        
        //clear if anything currently exists
        fetch("http://" + window.location.host + "/clearPlaylist/" + playListNumber, {method: 'PUT', headers: new Headers({'Content-Type': 'application/json'})})
            .then(res => res.json())
            .then(data => {

            })
            .catch(err => console.log(err));

    
        for (x = 0; x < trackID.length; x++) {

            fetch("http://" + window.location.host + "/track/" + trackID[x], { method: 'GET', headers: new Headers({ 'Content-Type': 'application/json' }) })
                .then(res => res.json())
                .then(data => {
                    fetch("http://" + window.location.host + "/listsPlaylist/" + playListNumber, {method: 'PUT', body: JSON.stringify(data), headers: new Headers({'Content-Type': 'application/json'})})
                        .then(res => res.json())
                        .then(data => {

                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        }
        
        
            
        
    });


    

}







//then fetch
// list[0].map(e => e.newTrack.map(...))
