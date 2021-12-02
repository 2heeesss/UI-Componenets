import { carouselState } from './carouselState.js';

function createImgElement(src) {
  const $img = document.createElement('img');
  $img.setAttribute('src', src);
  $img.style['object-fit'] = 'contain';
  return $img;
}
function insertBtns($container) {
  $container.insertAdjacentHTML('beforeend', `<button class="carousel-control prev">&laquo;</button>`);
  $container.insertAdjacentHTML('beforeend', `<button class="carousel-control next">&raquo;</button>`);
}
function getContainerWidth($img) {
  return $img.naturalWidth + parseInt(getComputedStyle($img).padding, 10) * 2;
}

export const carousel = ($container, images) => {
  const $carouselSlides = document.createElement('div');
  $carouselSlides.classList.add('carousel-slides');
  carouselState.imageLength = images.length;

  $carouselSlides.appendChild(createImgElement(images[carouselState.imageLength - 1]));

  images.forEach(image => {
    $carouselSlides.appendChild(createImgElement(image));
  });
  $carouselSlides.appendChild(createImgElement(images[0]));
  $container.appendChild($carouselSlides);
  insertBtns($container);

  $container.style.width = `${getContainerWidth(document.querySelector('img'))}px`;
  $container.style.opacity = 1;
};
