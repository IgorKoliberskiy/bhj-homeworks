const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelectorAll('.modal__close_times');
const btnDanger = document.querySelector('.btn_danger');

modalSuccess.style.display = 'none';

btnDanger.onclick = function () {
  modalSuccess.style.display = 'flex';
	modalMain.style.display = 'none';
} 

for (let i = 0; i < modalClose.length; i++) {
	const close = modalClose[i];
	
	close.onclick = function () {
		modalMain.style.display = 'none';
		modalSuccess.style.display = 'none';
	}

}