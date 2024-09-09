function updateTime() {
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "H:mm:ss[<small>]A[</small>]"
  );

  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloTime = moment().tz("America/Sao_Paulo");

  saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM Do YYYY");
  saoPauloTimeElement.innerHTML = saoPauloTime.format(
    "H:mm:ss[<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
