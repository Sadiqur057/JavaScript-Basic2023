// qus1 => Use a free API from the internet & fetch your API with their data

const weather = async(location)=>{
    let response = await fetch("https://goweather.herokuapp.com/weather/"+location);
    let r = await response.json();
    return r;
}
const mainFunc= async()=>{
    let weatherRep = await weather("bangladesh");
    console.log(weatherRep);
}
mainFunc();


// qus2 => Create a Note saving app which stores your note to localstorage

// qus3 = repeat the last quest & fetch the note whcih was stored

// qus4 => Delete the note in the previous question