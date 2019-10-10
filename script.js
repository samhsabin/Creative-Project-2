/* global fetch*/
/* global moment*/
document.getElementById("kanyeSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    
    const url = "https://api.kanye.rest";
    console.log("1");
    fetch(url)
        .then(function(response) {
            console.log("2");
            return response.json();
        }).then(function(json) {
            console.log(json.quote);
            let results = "";
            console.log("3");
            results += json.quote;
            document.getElementById("kanyeResults").innerHTML = results;
            console.log(response);
        });
});
