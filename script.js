/* global fetch*/
/* global moment*/
document.getElementById("kanyeSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    
    const url = "https://api.kanye.rest";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json.quote);
            let results = "";
            results += '"' + json.quote + '"';
            console.log(results);
            document.getElementById("kanyeResults").innerHTML = results;
        });
});
