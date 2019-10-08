/* global fetch*/
/* global moment*/
document.getElementById("kanyeSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    
    const url = "https://api.kanye.rest";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            let results = "";
            results += "<h2>" + json.name + "</h2>";
            document.getElementById("kanyeResults").innerHTML = results;
            console.log(response);
        });
        
        
        
});
