//make top-banner-text element fade in on load
$(document).ready(function(){
    $(".top-banner-text").fadeIn(2000);
    $(".line").fadeIn(2000);

    
});


function initMap() {
    // The location of Uluru
    const uluru = { lat: 51.797068, lng: -114.639373 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
window.initMap = initMap;