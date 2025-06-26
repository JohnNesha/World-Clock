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
setInterval(updateTime, 1000);
