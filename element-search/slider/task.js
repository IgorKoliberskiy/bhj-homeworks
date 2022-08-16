const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

sliderArrowNext.onclick = () => {
  let indexActiveSlide = sliderItem.findIndex(element => element.classList.contains('slider__item_active'));
  sliderItem[indexActiveSlide].classList.remove('slider__item_active');
  indexActiveSlide = sliderItem.length - 1 === indexActiveSlide ? 0 : indexActiveSlide + 1;
  sliderItem[indexActiveSlide].classList.add('slider__item_active');
};

sliderArrowPrev.onclick = () => {
  let indexActiveSlide = sliderItem.findIndex(element => element.classList.contains('slider__item_active'));
  sliderItem[indexActiveSlide].classList.remove('slider__item_active');
  indexActiveSlide = 0 === indexActiveSlide ? sliderItem.length - 1 : indexActiveSlide - 1;
  sliderItem[indexActiveSlide].classList.add('slider__item_active');
};