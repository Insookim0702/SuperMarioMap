function initMap(lat, log) {
  map = new google.maps.Map(document.getElementById("map"), {
    // center: { lat: 34.66792141379477, lng: 135.4306804301658 },
    center: { lat: lat, lng: log },
    zoom: 18,
    mapId: "ff1c23d39579fc60",
  });
  // Name
  // Latitude, Longitude
  // Image URL
  // scaledSize width, height
  const markers = [
    ["Yoshi;s House", lat, log, "./img/star.png", new google.maps.Size(38, 31)],
  ];
  const marker = new google.maps.Marker({
    position: { lat: lat, lng: log },
    map,
    animation: google.maps.Animation.DROP,
    title: "Hello World!",
    icon: {
      url: "./img/star.png",
      scaledSize: new google.maps.Size(38, 31),
    },

    //34.66721548545568, 135.4318284155447
  });
  const infowindow = new google.maps.InfoWindow({
    content: "my position",
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

function nowPosition() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  initMap(latitude, longitude);
}

function handleGeoError() {
  console.log("cant access geo postion");
}
//34.66792141379477, 135.4306804301658
