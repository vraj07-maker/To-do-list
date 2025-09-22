document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput").value.trim();
    const dateInput = document.getElementById("dateInput").value;
    const difficulty = document.getElementById("difficultyInput").value;

    if (!taskInput) return;

    const li = document.createElement("li");
    li.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = `${taskInput} (${dateInput}) [${difficulty}]`;

    checkbox.addEventListener("change", () => {
      span.classList.toggle("completed", checkbox.checked);
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.addEventListener("click", () => {
      const currentText = span.textContent.split(" (")[0];
      const newText = prompt("Edit task:", currentText);
      if (newText && newText.trim() !== "") {
        span.textContent = `${newText} (${dateInput}) [${difficulty}]`;
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
    document.getElementById("taskList").appendChild(li);

    // Clear inputs
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("difficultyInput").value = "Easy";
  });
});
