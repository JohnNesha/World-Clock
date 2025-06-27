function updateTime() {
  //Los Angeles
  let currentDate = moment().format("MMMM Do YYYY");
  let losAngelesTime = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesDateElement.innerHTML = currentDate;
  losAngelesTimeElement.innerHTML = losAngelesTime;

  //Paris
  let parisTime = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  parisDateElement.innerHTML = currentDate;
  parisTimeElement.innerHTML = parisTime;

  //Tokyo
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoDateElement.innerHTML = currentDate;
  tokyoTimeElement.innerHTML = tokyoTime;

  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyDateElement.innerHTML = currentDate;
  sydneyTimeElement.innerHTML = sydneyTime;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName} </h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")} </small></div>
        </div>
  <a href="/">All cities</a>
  `;
}

setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
