async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=5300802e-d0b9-45ee-bb6a-87281e23ff62&offset=0")
        // We have converted the data into the json format
    .then(data => data.json())
    .then(data => {
        if(data.status != "success") return; // if the status of data is not success then we will return 

        const matchesList = data.data;

        if(!matchesList) return[]; // if the list of the match is null then we will simply return the empty array

        const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);
    
        // Now we have got the relevant data from whole array i.e. its name and status by using map

        // const relevantData = matchesList.filter(match => match.series_id == "bd6e5de5-10fd-4476-9806-ddff16bf834c").map(match => `${match.name}, ${match.status}`);
        // if we want the data of a particular match like only IPL or only indian matches then we will just simply use this code which only include .filter element which fetch the data of the matches of a particular series id

        console.log({relevantData});
        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

        return relevantData;

    })
    .catch(e => console.log(e));
}

getMatchData();