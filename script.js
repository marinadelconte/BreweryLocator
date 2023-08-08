


//Waiting for buttons to be created

// let requestJoke = document.querySelector("#jokeBtn");
// let returnJoke = document.querySelector("#joke")
// let anotherJoke = document.querySelector("#badJoke");
// let keeper = document.querySelector("#goodJoke");






requestJoke.addEventListener("click", function (event) {
event.target.matches("#jokeBtn");

fetch('https://geek-jokes.sameerkumar.website/api?format=json')
.then(function(response){
    
return response.json()     
})
.then(function (newJoke) {
    console.log(newJoke);
    let randomJoke = newJoke.joke; 
    returnJoke.textContent = randomJoke;
})
})

anotherJoke.addEventListener("click", function(event) {


    event.target.matches("#badJoke");

   
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(function(response){
        
    return response.json()     
    })
    .then(function (newJoke) {
        console.log(newJoke);
        randomJoke = newJoke.joke; 
        returnJoke.textContent = randomJoke;
    })
})

keeper.addEventListener("click", function(event) {

    event.target.matches("goodJoke");

    localStorage.setItem("randomJoke", returnJoke.textContent);
})


