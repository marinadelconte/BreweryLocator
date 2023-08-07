let searchButton = document.getElementById("button-addon1")


searchButton.addEventListener("click", function (event){

    
    let cityName = document.getElementById("cityChoice").value;
    let numResults = document.getElementById("resultsNumber").value;



    fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${cityName}&per_page=${numResults}`)
    .then(function(response){
        
    return response.json()     
    })
    .then(function (breweries) {
        console.log(breweries)
      

        for (let i = 0; i < breweries.length; i++) {
            let newdiv = document.createElement("div");
            let barName = document.createElement("h5")
            let secondDiv = document.createElement("div");
            let address = document.createElement("h5")
            let barType = document.createElement("p")
            let website = document.createElement("a")
            let brewery = document.getElementById("brewery")
            brewery.appendChild(newdiv)
            newdiv.classList.add("card")
            newdiv.appendChild(barName)
            barName.classList.add("card-header")
            newdiv.appendChild(secondDiv)
            secondDiv.classList.add("card-body")
            secondDiv.appendChild(address)
            address.classList.add("card-title")
            secondDiv.appendChild(barType)
            barType.classList.add("card-text")
            secondDiv.appendChild(website)
            website.classList.add("btn")
            website.setAttribute("href", breweries[i].website_url)
            barName.textContent = (breweries[i].name)
            address.textContent = (breweries[i].address_1 )
            barType.textContent = ("This brewery is a " + breweries[i].brewery_type + " brewery")
            website.textContent = (breweries[i].website_url)
        }
    })










})


