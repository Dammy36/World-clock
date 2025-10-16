function upDated() {
  const nigeriaCity = document.getElementById("nigeria-city");
  if (nigeriaCity) {
    const nigeriaDate = document.getElementById("nigeria-date");

    const nigeriaTime = document.getElementById("nigeria-time");

    const currentTime = moment().tz("Africa/Lagos");
    nigeriaDate.innerHTML = currentTime.format("MMMM Do YYYY");
    nigeriaTime.innerHTML = currentTime.format("h:m:s [<small>]A[</small>]");
  }

  const losAngelesCity = document.getElementById("los-angeles-city");
  if (losAngelesCity) {
    const losAngelesDate = document.getElementById("los-angeles-date");

    const losAngelesTime = document.getElementById("los-angeles-time");

    const TimeZone = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = TimeZone.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = TimeZone.format("h:m:s [<small>]A[</small>]");
  }

  const turkeyCity = document.getElementById("turkey-city");
  if (turkeyCity) {
    const turkeyDate = document.getElementById("turkey-date");

    const turkeyTime = document.getElementById("turkey-time");

    const turkeyTimeZone = moment().tz("Asia/Istanbul");
    turkeyDate.innerHTML = turkeyTimeZone.format("MMMM	Do YYYY");
    turkeyTime.innerHTML = turkeyTimeZone.format("h:m:s [<small>]A[</small>]");
  }
}

function updatedCity(event) {
  let cityEvent = event.target.value;
  if (cityEvent === "Current") {
    cityEvent = moment.tz.guess();
  }
  const cityName = cityEvent.replace("_", " ").split("/")[1];
  const cityElement = moment.tz(cityEvent);
  const cityContainer = document.getElementById("cities");
  cityContainer.innerHTML = `
  <div class="city">
          <div>
            <h2 class="city-content">${cityName} </h2>
            <div class="city-content date" >${cityElement.format(
              "MMMM	Do YYYY"
            )}              
            </div>
          </div>
          <div class="time" id="nigeria-time">${cityElement.format(
            "h:m:ss"
          )}<small>${cityElement.format("A")}</small></div>
        </div>
        <a href="/" class="all-cities">All cities</a>
 `;
}

upDated();
setInterval(upDated, 1000);

const cityInput = document.getElementById("city-input");
cityInput.addEventListener("change", updatedCity);
