const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdBlock = document.getElementById('user_id');
const signinBlock = document.getElementById('signin');

function welcomeUser(userId) {
	userIdBlock.id = userId;
	userIdBlock.textContent = userId;
	welcomeBlock.classList.add('welcome_active');
	signinBlock.classList.remove('signin_active');
};

if (localStorage.getItem('user_id')) {
	welcomeUser(localStorage.getItem('user_id'));
};

signinForm.addEventListener('submit', function(e) {
	e.preventDefault();
	
	const xhr = new XMLHttpRequest();
	xhr.responseType = "json";


	xhr.addEventListener('load', function() {
		const userId = xhr.response.user_id;

		if (xhr.response.success) {
			localStorage.setItem('user_id', userId);
			signinForm.reset();
			welcomeUser(userId)
		}	else {
			alert('Неверный логин/пароль');
		};
	})

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);

	const formData = new FormData(signinForm);

	xhr.send(formData);

})