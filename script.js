let searchButton = document.getElementById("button-addon1")
let brewDiv = document.getElementById("brewItems")
let childNum = 0;
searchButton.addEventListener("click", function(event){
    if (childNum === 0) {
    displaySearch();}
    else{removeChildren(brewDiv);
        childNum = 0
        displaySearch()
    }
})



function displaySearch(){
    

    
        let cityName = document.getElementById("cityChoice").value;
        let numResults = document.getElementById("resultsNumber").value;
    
    
    
        fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${cityName}&per_page=${numResults}`)
        .then(function(response){
            
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
                secondDiv.appendChild(saveLocal)
                saveLocal.classList.add("btn", "btn-outline-success")
                website.classList.add("btn", "btn-outline-primary")
                website.setAttribute("href", breweries[i].website_url)
                phoneNumber.textContent = (breweries[i].phone)
                barName.textContent = (breweries[i].name)
                address.textContent = (breweries[i].address_1 )
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
            }childNum = breweries.length})}
brewDiv.addEventListener("click", function(event){

    if (event.target.matches("button")) {
        let newDiv = event.target.parentElement;
        console.log(newDiv)
        divContent = newDiv.innerHTML;
        localStorage.setItem("divContent", divContent)}})


function removeChildren(brewDiv){
    let parentDiv = brewDiv;
  while (parentDiv.firstChild) {
    brewDiv.removeChild(parentDiv.firstChild)}}





