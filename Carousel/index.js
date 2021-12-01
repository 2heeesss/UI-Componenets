// 1. 캐러셀 작업
// 2. carousel클래스 overflow 바꾸기, opacity 바꾸기
// 3.
let MAX;

const carousel = ($container, images) => {
  const $carouselSlides = document.createElement('div');
  $carouselSlides.classList.add('carousel-slides');
  images.forEach(image => {
    $carouselSlides.insertAdjacentHTML('beforeend', `<img src=${image}>`);
  });
  MAX = images.length;

  $container.appendChild($carouselSlides);
  $container.insertAdjacentHTML('beforeend', `<button class="carousel-control prev">&laquo;</button>`);
  $container.insertAdjacentHTML('beforeend', `<button class="carousel-control next">&raquo;</button>`);

  $container.style.opacity = 1;
};

carousel(document.querySelector('.carousel'), [
  './movies/movie-1.jpeg',
  './movies/movie-2.jpeg',
  './movies/movie-3.jpeg',
  './movies/movie-4.jpeg',
]);

const $prevBtn = document.querySelector('.prev');
const $nextBtn = document.querySelector('.next');
const $carouselSlides = document.querySelector('.carousel-slides');

$carouselSlides.style.setProperty('--duration', 500);

let currentSlide = 0;

$prevBtn.addEventListener('click', () => {
  currentSlide = currentSlide - 1 < 0 ? MAX - 1 : currentSlide - 1;
  currentSlide === MAX - 1
    ? $carouselSlides.style.setProperty('--duration', 0)
    : $carouselSlides.style.setProperty('--duration', 500);
  $carouselSlides.style.setProperty('--currentSlide', currentSlide);
});

$nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % MAX;

  currentSlide === 0
    ? $carouselSlides.style.setProperty('--duration', 0)
    : $carouselSlides.style.setProperty('--duration', 500);
  $carouselSlides.style.setProperty('--currentSlide', currentSlide);
});
