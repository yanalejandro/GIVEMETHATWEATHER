var apiKey = "b32d8d47229748dda80c0fdc51f51c6f";
var searchBtn = document.getElementById("searpch-btn")
var searchCity = document.getElementById("|search-city")

$(searchBtn).on("click", function(event){
    event.preventDefault();
    var content = searchCity.value
    searchBtn(content)
})

  let 