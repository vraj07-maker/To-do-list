const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = document.getElementById('task-input').value;
  const dueDate = document.getElementById('date-input').value;
  const priority = document.getElementById('priority-input').value;

  const task = document.createElement('div');
  task.className = 'task';

  task.innerHTML = `
    <div class="task-left">
      <input type="checkbox" />
      <span class="task-text">${taskText}</span>
    </div>
    <div class="task-meta">
      <span>${dueDate}</span> |
      <span>${priority}</span>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;

  taskList.appendChild(task);
  form.reset();
});

// Optional: Add delete/edit functionality
taskList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('.task').remove();
  }
});