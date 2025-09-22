const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = document.getElementById("taskInput").value.trim();
  const taskDate = document.getElementById("dateInput").value;
  const difficulty = document.getElementById("difficultyInput").value;

  if (!taskText) return;

  const li = document.createElement("li");
  li.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = `${taskText} (${taskDate}) [${difficulty}]`;

  checkbox.addEventListener("change", () => {
    span.classList.toggle("completed", checkbox.checked);
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit task:", taskText);
    if (newText) {
      span.textContent = `${newText} (${taskDate}) [${difficulty}]`;
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  document.getElementById("taskInput").value = "";
});
