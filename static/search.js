const searchForm = document.getElementById("search-form");
const locationQuery = document.getElementById("location-query");
const findMeButton = document.getElementById("find-me");

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    const mapCenter = mapLeft.getCenter();
    locationQuery.value.length > 0 &&
    fetch(`${location.origin}/search?query=${locationQuery.value}&locationbias=${mapCenter.lat},${mapCenter.lng}`)
        .then((response) => response.status == 200 && response.json())
        .then((data) => {
        if (data.result.candidates.length > 0) {
            const newLocation = data.result.candidates[0].geometry.location;
            mapLeft.setCenter([newLocation.lng, newLocation.lat]);
            mapRight.setCenter([newLocation.lng, newLocation.lat]);
        };
    });
});


findMeButton.addEventListener("click", ()=> {
    navigator.geolocation.getCurrentPosition((data) => {
      mapLeft.setCenter([data.coords.longitude, data.coords.latitude]);
      mapRight.setCenter([data.coords.longitude, data.coords.latitude]);
    });
})
