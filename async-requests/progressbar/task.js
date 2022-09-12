const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
   
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
  const formData = new FormData(form);
  xhr.upload.addEventListener('progress', function (e) {
    progress.value = e.loaded / e.total;
  })

  xhr.send(formData);
})