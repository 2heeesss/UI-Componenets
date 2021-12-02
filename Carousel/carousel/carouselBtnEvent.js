import { carouselState } from './carouselState.js';

export function addCarouselBtnEvents() {
  const $prevBtn = document.querySelector('.prev');
  const $nextBtn = document.querySelector('.next');
  const $carouselSlides = document.querySelector('.carousel-slides');

  $carouselSlides.style.setProperty('--duration', 100);
  $carouselSlides.style.setProperty('--currentSlide', carouselState.currentSlide);

  function setSlideProperty(slideIndex, duration) {
    $carouselSlides.style.setProperty('--duration', duration);
    $carouselSlides.style.setProperty('--currentSlide', slideIndex);
  }

  function moveSlide(slideIndex) {
    carouselState.currentSlide = slideIndex;
    setSlideProperty(slideIndex, 0);
  }

  $prevBtn.addEventListener('click', () => {
    carouselState.currentSlide -= 1;
    if (carouselState.currentSlide < 0) return;

    setSlideProperty(carouselState.currentSlide, 400);
    if (carouselState.currentSlide === 0) {
      setTimeout(() => moveSlide(carouselState.imageLength), 400);
    }
  });

  $nextBtn.addEventListener('click', () => {
    carouselState.currentSlide += 1;
    if (carouselState.currentSlide > carouselState.imageLength + 1) return;

    setSlideProperty(carouselState.currentSlide, 400);
    if (carouselState.currentSlide === carouselState.imageLength + 1) {
      setTimeout(() => moveSlide(1), 400);
    }
  });
}
