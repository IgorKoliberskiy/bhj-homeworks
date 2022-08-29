const chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
})

const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const date = new Date();
const HH = ('0' + date.getHours()).slice(-2);
const mm = ('0' + date.getMinutes()).slice(-2);

const botMessages = [
    'Добрый день!',
    'Как к вам обращаться?',
    'Что именно Вас интересует?',
    'Посмотрите в нашем каталоге',
    'Это хороший выбор',
    'могу я еще чем-то помочь?',
    'До свидания',
  ]

chatWidgetInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${HH}:${mm}</div>
        <div class="message__text">${chatWidgetInput.value}</div>
      </div>`;
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${HH}:${mm}</div>
        <div class="message__text">${botMessages[Math.round(Math.random() * (botMessages.length + 1))]}</div>
      </div>`;
    chatWidgetInput.value = "";
  }  
})