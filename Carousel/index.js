function getMaxImageWidth(images) {
  return Math.max(
    ...images.map(image => {
      const newImage = new Image();
      newImage.src = image;
      return newImage.width;
    })
  );
}

function createImgElement(src) {
  const $img = document.createElement('img');
  $img.setAttribute('src', src);
  $img.style['object-fit'] = 'contain';
  return $img;
}

let maxImageLen;

const carousel = ($container, images) => {
  const $carouselSlides = document.createElement('div');
  $carouselSlides.classList.add('carousel-slides');
  maxImageLen = images.length;

  $carouselSlides.appendChild(createImgElement(images[maxImageLen - 1]));

  images.forEach(image => {
    $carouselSlides.appendChild(createImgElement(image));
  });
  $carouselSlides.appendChild(createImgElement(images[0]));
  $container.appendChild($carouselSlides);
  $container.insertAdjacentHTML('beforeend', `<button class="carousel-control prev">&laquo;</button>`);
  $container.insertAdjacentHTML('beforeend', `<button class="carousel-control next">&raquo;</button>`);

  const maxImageWidth = getMaxImageWidth(images);

  const defaultPadding = parseInt(getComputedStyle(document.querySelector('img')).padding, 10);
  $container.style.width = `${maxImageWidth + defaultPadding * 2}px`;

  document.querySelectorAll('img').forEach($img => {
    $img.style.setProperty('padding', `${(maxImageWidth - $img.naturalWidth + defaultPadding * 2) / 2}px`);
  });
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

let currentSlide = 1;
$carouselSlides.style.setProperty('--duration', 100);
$carouselSlides.style.setProperty('--currentSlide', currentSlide);

$prevBtn.addEventListener('click', () => {
  currentSlide -= 1;
  if (currentSlide < 0) return;
  $carouselSlides.style.setProperty('--duration', 400);
  $carouselSlides.style.setProperty('--currentSlide', currentSlide);
  if (currentSlide === 0) {
    setTimeout(() => {
      currentSlide = maxImageLen;
      $carouselSlides.style.setProperty('--duration', 0);
      $carouselSlides.style.setProperty('--currentSlide', currentSlide);
    }, 400);
  }
});

$nextBtn.addEventListener('click', () => {
  currentSlide += 1;
  if (currentSlide > maxImageLen + 1) return;
  $carouselSlides.style.setProperty('--duration', 400);
  $carouselSlides.style.setProperty('--currentSlide', currentSlide);
  if (currentSlide === maxImageLen + 1) {
    setTimeout(() => {
      currentSlide = 1;
      $carouselSlides.style.setProperty('--duration', 0);
      $carouselSlides.style.setProperty('--currentSlide', currentSlide);
    }, 400);
  }
});
