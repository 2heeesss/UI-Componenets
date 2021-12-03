import { getCarouselState, setCarouselState } from './carouselState.js';

function createImgElement(src) {
  const $img = document.createElement('img');
  $img.setAttribute('src', src);
  return $img;
}
function insertCarouselBtns($container) {
  $container.insertAdjacentHTML('beforeend', `<button class="carousel-control prev">&laquo;</button>`);
  $container.insertAdjacentHTML('beforeend', `<button class="carousel-control next">&raquo;</button>`);
}
function getContainerWidth($img) {
  return $img.naturalWidth + parseInt(getComputedStyle($img).padding, 10) * 2;
}

export const carousel = ($container, images) => {
  const $carouselSlides = document.createElement('div');
  $carouselSlides.classList.add('carousel-slides');

  setCarouselState({ imageLength: images.length });

  $carouselSlides.appendChild(createImgElement(images[getCarouselState().imageLength - 1]));
  images.forEach(image => {
    $carouselSlides.appendChild(createImgElement(image));
  });
  $carouselSlides.appendChild(createImgElement(images[0]));
  $container.appendChild($carouselSlides);

  insertCarouselBtns($container);

  $container.style.width = `${getContainerWidth(document.querySelector('img'))}px`;
  $container.style.opacity = 1;
};
