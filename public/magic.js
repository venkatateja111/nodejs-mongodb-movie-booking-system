
  $(document).ready(function(){
    $(".button").on('click', function(e){
    console.log("response");
    var settings = {
"url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
"method": "GET",
"timeout": 0,
"headers": {
"api-version": "v200",
"Authorization": "Basic TU9WSV85NDpxSjBEQzQ2YjlLNVI=",
"client": "MOVI_94",
"x-api-key": "Ohh7dwMuaY4CTIKPAbPAO8EOKL1yfBdt8ifr7cvL",
"device-datetime": "2021-03-12T13:23:43.828Z",
"territory": "IN"
},
};

$.ajax(settings).done(function (response) {

console.log(response.films[0]);
});
});
})