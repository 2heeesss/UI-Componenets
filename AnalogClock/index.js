(function () {
  const MAX_DEG = 360;

  const currentDate = new Date();
  let secondDeg = currentDate.getSeconds() * 6;
  let minuteDeg = currentDate.getMinutes() * 6;
  let hourDeg = currentDate.getHours() * 30;

  setInterval(() => {
    secondDeg = (secondDeg + 6) % MAX_DEG;
    minuteDeg = (minuteDeg + 6 / 60) % MAX_DEG;
    hourDeg = (hourDeg + 6 / 60 / 12) % MAX_DEG;

    document.querySelector('.second').style.setProperty('--deg', secondDeg);
    document.querySelector('.minute').style.setProperty('--deg', minuteDeg);
    document.querySelector('.hour').style.setProperty('--deg', hourDeg);
  }, 1000);
})();
