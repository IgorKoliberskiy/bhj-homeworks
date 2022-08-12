const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

let sliderImageNumber = 0;

sliderArrowNext.onclick = () => {
  sliderImageNumber++;
  for (let sliderImage of sliderItem) {
    sliderImage.className = 'slider__item';
  }
  if (sliderImageNumber >= sliderItem.length) {
    sliderImageNumber = 0;
  }
  sliderItem[sliderImageNumber].className = 'slider__item slider__item_active';
};

sliderArrowPrev.onclick = () => {
  sliderImageNumber--;
  for (let sliderImage of sliderItem) {
    sliderImage.className = 'slider__item';
  }
  if (sliderImageNumber < 0) {
    sliderImageNumber = sliderItem.length - 1;
}
  sliderItem[sliderImageNumber].className = 'slider__item slider__item_active';
};