let [mm, ss, ms] = [0, 0, 0];
let count = 0;

let timeId;
const $display = document.querySelector('.display');
const $controlBtn = document.querySelectorAll('.control')[0];
const $recordBtn = document.querySelectorAll('.control')[1];

function toggleControlBtn(target, content) {
  if (content === 'Start') {
    target.textContent = 'Stop';
    target.nextElementSibling.textContent = 'Laps';
    target.nextElementSibling.disabled = false;
  } else {
    target.textContent = 'Start';
    target.nextElementSibling.textContent = 'Reset';
  }
}

function formatTime(time) {
  return +time < 10 ? '0' + time : '' + time;
}

$controlBtn.addEventListener('click', e => {
  if (e.target.textContent === 'Start') {
    toggleControlBtn(e.target, 'Start');
    timeId = setInterval(() => {
      ss = ms + 1 >= 100 ? ss + 1 : ss;
      mm = ss >= 60 ? mm + 1 : mm;
      ss %= 60;
      ms = (ms + 1) % 100;

      $display.textContent = `${formatTime(mm)}:${formatTime(ss)}:${formatTime(ms)}`;
    }, 1);
  } else {
    clearInterval(timeId);
    toggleControlBtn(e.target, 'Stop');
  }
});

function setDisplayLapTitles(display) {
  const [$lapsTitle, $timeTitle] = document.querySelectorAll('.lap-title');
  $lapsTitle.style.display = display;
  $timeTitle.style.display = display;
}

function getNewLapsElem() {
  const $newLaps = document.createElement('div');
  $newLaps.classList.add('laps');

  const $newLapsTitle = document.createElement('div');
  $newLapsTitle.classList.add('lap-title');
  $newLapsTitle.textContent = 'Laps';

  const $newTimeTitle = document.createElement('div');
  $newLaps.classList.add('lap-title');
  $newTimeTitle.textContent = 'Time';

  $newLaps.append($newLapsTitle, $newTimeTitle);

  return $newLaps;
}

setDisplayLapTitles('none');
$recordBtn.addEventListener('click', e => {
  const $laps = document.querySelector('.laps');
  if (e.target.textContent === 'Reset') {
    [mm, ss, ms] = [0, 0, 0];
    count = 0;
    e.target.disabled = true;

    const $stopwatch = document.querySelector('.stopwatch');
    $stopwatch.replaceChild(getNewLapsElem(), $laps);

    setDisplayLapTitles('none');

    $display.textContent = '00:00:00';
  } else {
    setDisplayLapTitles('block');

    const $timeNum = document.createElement('div');
    const $timeText = document.createElement('div');
    $timeNum.textContent = ++count;
    $timeText.textContent = $display.textContent;
    $laps.append($timeNum, $timeText);
  }
});
