const INITIAL_SLIDE_INDEX = 1;
const INITIAL_IMAGE_LENGTH = 0;

const carouselState = {
  imageLength: INITIAL_IMAGE_LENGTH,
  currentSlide: INITIAL_SLIDE_INDEX,
};

export function getCarouselState() {
  return Object.assign(carouselState);
}

export function setCarouselState(newState) {
  if (typeof newState !== 'object') return;
  Object.keys(newState).forEach(key => {
    carouselState[key] = newState[key];
  });
}
