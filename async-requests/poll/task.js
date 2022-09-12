const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', function () {
  if (xhr.readyState === xhr.DONE) {
    let poll = JSON.parse(xhr.responseText).data;
    pollTitle.innerText = poll.title;
    for (let answer of poll.answers) {
        pollAnswers.innerHTML +=
        `<button class="poll__answer">
            ${answer}
        </button>`
    }
}
})

pollAnswers.addEventListener("click", () => {
  alert('Спасибо, ваш голос засчитан!')
})