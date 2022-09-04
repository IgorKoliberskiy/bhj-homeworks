const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

tasksForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (taskInput.value.trim()) {
    tasksList.innerHTML += `
      <div class="task">
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `
    taskInput.value = '';
  }
});

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task__remove')) {
    e.target.parentElement.remove();
  }
});
