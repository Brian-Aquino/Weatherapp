var Geo={};
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(success, error);
}

function error(){
  alert("We can't seem to find your location");
}
function success(position){
  Geo.lat = position.coords.latitude;
  Geo.lng = position.coords.longitude;
}

// Using the api key
var key ='';
var Weather = "http://api.wunderground.com/api/" + key + "/forecast/geolookup/conditions/q/"+ Geo.lat + "," + Geo.lng + ".json";
$(document).ready(function(){
$.ajax({
  url:Weather,
  dataType:"jsonp",
  success:function(data){
    var location = data['location']['city'];
    var temp = data['current_observation']['temp_f'];
    var img = data['current_observation']['icon_url'];
    var desc = data['current_observation']['weather'];
    var wind = data ['current_observation']['wind_string'];
  
  $('#location').html(location);
  $('#temp').html(temp);
  $('img').attr('src', img);
  $('desc').html(desc);
  $('wind').html(wind);
  
  }
})
});