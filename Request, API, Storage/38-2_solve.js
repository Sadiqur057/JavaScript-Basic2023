// qus1 => Use a free API from the internet & fetch your API with their data

const weather = async (location) => {
  let response = await fetch(
    "https://goweather.herokuapp.com/weather/" + location
  );
  let r = await response.json();
  return r;
};
const mainFunc = async () => {
  let weatherRep = await weather("bangladesh");
  console.log(weatherRep);
};
mainFunc();

// qus2 => Create a Note saving app which stores your note to localstorage

const noteBook = () => {
  let title = document.getElementById("title").value;
  let note = document.getElementById("note").value;
  localStorage.setItem(title, note);
  alert("Note saved successfully");
  displayCards();
};

// qus3 = repeat the last quest & fetch the note which was stored

let cardContainer = document.getElementById("cardContainer");

const displayCards=()=> {
let cardContent = "";
console.log(typeof localStorage);

for (let key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
    cardContent+=
    `<div class="col-sm-6 mb-3 mb-sm-0" id="card-box">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title" id="note-title">${key}</h5>
            <p class="card-text" id="note-desc">${localStorage[key]}</p>
            <button class="btn btn-danger" onclick="deleteNote('${key}',this)">Delete</button>
          </div>
        </div>
      </div>`;
  }
}
cardContainer.innerHTML=cardContent;
}

// qus4 => Delete the note in the previous question

    const deleteNote =(key,card)=>{
      localStorage.removeItem(key);
      let cardElement = card.parentElement.parentElement.parentElement;
      cardElement.remove();
  }
  displayCards();