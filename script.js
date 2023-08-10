let searchButton = document.getElementById("button-addon1")
let myModal = new bootstrap.Modal(document.querySelector('.modal'));

function displaySearch() {

    let cityName = document.getElementById("cityChoice").value;
    let numResults = document.getElementById("resultsNumber").value;

    if (numResults <= 0 || numResults === "" || cityName === "") {
        myModal.show();
        return;
    }

    fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${cityName}&per_page=${numResults}`)
        .then(function (response) {

            return response.json()
        })
        .then(function (breweries) {
            console.log(breweries)

            for (let i = 0; i < breweries.length; i++) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("newDiv")
                let barName = document.createElement("h5")
                let secondDiv = document.createElement("div");
                let address = document.createElement("h5")
                let barType = document.createElement("p")
                let website = document.createElement("a")
                let saveLocal = document.createElement("button")
                let brewery = document.getElementById("brewItems")
                let phoneNumber = document.createElement("p")
                brewery.appendChild(newDiv)
                newDiv.classList.add("card")
                newDiv.appendChild(barName)
                barName.classList.add("card-header", "brewcard-style-title")
                newDiv.appendChild(secondDiv)
                secondDiv.classList.add("card-body", "brewcard-style-body")
                secondDiv.appendChild(address)
                address.classList.add("card-title")
                secondDiv.appendChild(barType)
                barType.classList.add("card-text")
                secondDiv.appendChild(phoneNumber)
                phoneNumber.classList.add("card-text")
                secondDiv.appendChild(website)
                secondDiv.appendChild(saveLocal)
                saveLocal.classList.add("btn", "btn-outline-dark", "input-color")
                website.classList.add("btn", "btn-outline-dark", "input-color")
                website.setAttribute("href", breweries[i].website_url)
                phoneNumber.textContent = (breweries[i].phone)
                barName.textContent = (breweries[i].name)
                address.textContent = (breweries[i].address_1)
                barType.textContent = ("This brewery is a " + breweries[i].brewery_type + " brewery!")
                website.textContent = (breweries[i].website_url)
                saveLocal.textContent = ("I want to go to this brewery!")
                if (!breweries[i].address_1) {
                    address.textContent = "Address unknown"
                }
                if (!breweries[i].website_url) {
                    website.textContent = "Website not found"
                    website.classList.remove("btn-outline-primary")
                }
                if (!breweries[i].brewery_type) {
                    barType.textContent = "We're not sure what kind of bar this is!"
                }
                if (!breweries[i].phone) {
                    phoneNumber.textContent = "Phone number not found"
                }
            } childNum = breweries.length
        })
}
function removeChildren(brewDiv) {
    let parentDiv = brewDiv;
    while (parentDiv.firstChild) {
        brewDiv.removeChild(parentDiv.firstChild)
    }
}


let brewDiv = document.getElementById("brewItems")
let childNum = 0;
searchButton.addEventListener("click", function (event) {
    if (childNum === 0) {
        displaySearch();
    }
    else {
        removeChildren(brewDiv);
        childNum = 0
        displaySearch()
    }
})

let requestJoke = document.querySelector("#jokeBtn");
let returnJoke = document.querySelector("#joke")
let anotherJoke = document.querySelector("#badJoke");
let keeper = document.querySelector("#goodJoke");
let jokeOptions = document.getElementsByClassName("joke-options")
let jokeChoice = document.querySelector("#finalJoke");
let randomJoke = "";
let jokeHeader = document.querySelector("#jokeHeader")





requestJoke.addEventListener("click", function (event) {
    event.target.matches("#jokeBtn");

    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        .then(function (response) {

            return response.json()
        })
        .then(function (newJoke) {
            console.log(newJoke);
            randomJoke = newJoke.joke;
            returnJoke.textContent = randomJoke;

            for (let i = 0; i < jokeOptions.length; i++) {
                jokeOptions[i].style.display = "flex";

            }
            removeJokeItems();
        })
})

anotherJoke.addEventListener("click", function (event) {


    event.target.matches("#badJoke");


    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        .then(function (response) {

            return response.json()
        })
        .then(function (newJoke) {
            console.log(newJoke);
            randomJoke = newJoke.joke;
            returnJoke.textContent = randomJoke;
        })
})

keeper.addEventListener("click", function (event) {


    event.target.matches("goodJoke");

    localStorage.setItem("randomJoke", randomJoke);

    let jokeStorage = localStorage.getItem("randomJoke");

    joke.style.display = "hidden";

    finalJoke.innerHTML = "<b> While you're there, try out this joke: </b>" + jokeStorage;

})

brewDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        let newDiv = event.target.parentElement;
        console.log(newDiv)
        divContent = newDiv.innerHTML;
        localStorage.setItem("divContent", divContent)
        let brewStorage = localStorage.getItem("divContent");
        let finalBrew = document.getElementById("finalBrew");
        finalBrew.innerHTML = "<b> You selected the following brewery</b>: " + brewStorage;
        let buttonFromCard = finalBrew.querySelector("button")
        finalBrew.removeChild(buttonFromCard);
    }
})

function removeJokeItems(){
    requestJoke.style.visibility = "hidden"
    jokeHeader.style.visibility = "hidden"
}

