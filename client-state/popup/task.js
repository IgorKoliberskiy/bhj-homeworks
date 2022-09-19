const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modal=close';
});

window.addEventListener('load', () => {
  if (!document.cookie.includes('modal=close')) {
    modal.classList.add('modal_active');
  }
});