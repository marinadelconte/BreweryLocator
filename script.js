let searchButton = document.getElementById("button-addon1")


searchButton.addEventListener("click", function (event) {


    let cityName = document.getElementById("cityChoice").value;
    let numResults = document.getElementById("resultsNumber").value;



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
                let brewery = document.getElementById("brewery")
                let phoneNumber = document.createElement("p")
                brewery.appendChild(newDiv)
                newDiv.classList.add("card")
                newDiv.appendChild(barName)
                barName.classList.add("card-header")
                newDiv.appendChild(secondDiv)
                secondDiv.classList.add("card-body")
                secondDiv.appendChild(address)
                address.classList.add("card-title")
                secondDiv.appendChild(barType)
                barType.classList.add("card-text")
                secondDiv.appendChild(phoneNumber)
                phoneNumber.classList.add("card-text")
                secondDiv.appendChild(website)
                website.classList.add("btn")
                website.setAttribute("href", breweries[i].website_url)
                phoneNumber.textContent = (breweries[i].phone)
                barName.textContent = (breweries[i].name)
                address.textContent = (breweries[i].address_1)
                barType.textContent = ("This brewery is a " + breweries[i].brewery_type + " brewery!")
                website.textContent = (breweries[i].website_url)

                if (!breweries[i].address_1) {
                    address.textContent = "Address unknown"
                }
                if (!breweries[i].website_url) {
                    website.textContent = "Website not found"
                }
                if (!breweries[i].brewery_type) {
                    barType.textContent = "We're not sure what kind of bar this is!"
                }
                if (!breweries[i].phone) {
                    phoneNumber.textContent = "Phone number not found"
                }
            }
            removeChildren();
        })

    function removeChildren() {
        let newDiv = document.querySelectorAll(".newDiv")
        let mainDiv = document.getElementById("brewery")
        if (newDiv)
            mainDiv.removeChild(newDiv)
    }



})



// Random Joke Section



let requestJoke = document.querySelector("#jokeBtn");
let returnJoke = document.querySelector("#joke")
let anotherJoke = document.querySelector("#badJoke");
let keeper = document.querySelector("#goodJoke");
let jokeOptions = document.getElementsByClassName("joke-options")
let jokeChoice = document.querySelector("#finalJoke");
let randomJoke = "";






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

        finalJoke.textContent = "While you're there, try out this joke: " + jokeStorage;

        

    })

    