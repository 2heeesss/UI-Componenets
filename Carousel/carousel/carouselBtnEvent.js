import { getCarouselState, setCarouselState } from './carouselState.js';

function setDurationProperty($carouselSlides, duration) {
  $carouselSlides.style.setProperty('--duration', duration);
}

function setCurrentSlideProperty($carouselSlides, slideIndex) {
  $carouselSlides.style.setProperty('--currentSlide', slideIndex);
}

function setCurrentSlide(slideIndex) {
  setCarouselState({ currentSlide: slideIndex });
}

function moveSlide($carouselSlides, slideIndex, duration) {
  setCurrentSlide(slideIndex);
  setDurationProperty($carouselSlides, duration);
  setCurrentSlideProperty($carouselSlides, getCarouselState().currentSlide);
}

function silentMove($carouselSlides, index) {
  setTimeout(() => moveSlide($carouselSlides, index, 0), 400);
}

export function addCarouselBtnEvents() {
  const $prevBtn = document.querySelector('.prev');
  const $nextBtn = document.querySelector('.next');
  const $carouselSlides = document.querySelector('.carousel-slides');

  setCurrentSlideProperty($carouselSlides, getCarouselState().currentSlide);

  $prevBtn.addEventListener('click', () => {
    const newState = getCarouselState();
    newState.currentSlide -= 1;
    setCarouselState(newState);
    if (newState.currentSlide < 0) return;

    moveSlide($carouselSlides, newState.currentSlide, 400);
    if (newState.currentSlide === 0) {
      silentMove($carouselSlides, newState.imageLength);
    }
  });

  $nextBtn.addEventListener('click', () => {
    const newState = getCarouselState();
    newState.currentSlide += 1;
    setCarouselState(newState);
    if (newState.currentSlide > newState.imageLength + 1) return;

    moveSlide($carouselSlides, newState.currentSlide, 400);
    if (newState.currentSlide === newState.imageLength + 1) {
      silentMove($carouselSlides, 1);
    }
  });
}
