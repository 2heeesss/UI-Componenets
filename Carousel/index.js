import { addCarouselBtnEvents } from './carousel/carouselBtnEvent.js';
import { carousel } from './carousel/addCarousel.js';

carousel(document.querySelector('.carousel'), [
  './movies/movie-1.jpeg',
  './movies/movie-2.jpeg',
  './movies/movie-3.jpeg',
  './movies/movie-4.jpeg',
]);

addCarouselBtnEvents();
