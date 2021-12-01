import createElement from '../utils/createElement';

let [mm, ss, ms] = [0, 0, 0];

(function () {
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

  let timeId;
  const $display = document.querySelector('.display');
  const $controlBtn = document.querySelectorAll('.control')[0];
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
})();

(function () {
  const $display = document.querySelector('.display');

  let count = 0;
  function setDisplayLapTitles(display) {
    const [$lapsTitle, $timeTitle] = document.querySelectorAll('.lap-title');
    $lapsTitle.style.display = display;
    $timeTitle.style.display = display;
  }

  function getNewLapsElem() {
    const $newLaps = createElement('div', 'laps');

    const $newLapsTitle = createElement('div', 'lap-title');
    $newLapsTitle.textContent = 'Laps';

    const $newTimeTitle = createElement('div', 'lap-title');
    $newTimeTitle.textContent = 'Time';

    $newLaps.append($newLapsTitle, $newTimeTitle);

    return $newLaps;
  }

  setDisplayLapTitles('none');
  const $recordBtn = document.querySelectorAll('.control')[1];
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

      const $timeNum = createElement('div');
      const $timeText = createElement('div');
      $timeNum.textContent = ++count;
      $timeText.textContent = $display.textContent;
      $laps.append($timeNum, $timeText);
    }
  });
})();
