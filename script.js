// Function to add a new task
function addTask() {
  const taskName = document.getElementById('taskName').value.trim();
  const taskDateTime = document.getElementById('taskDateTime').value.trim();

  if (!taskName || !taskDateTime) {
      alert('Please enter both task name and date/time');
      return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
      <span>${taskName} - ${taskDateTime}</span>
      <button onclick="completeTask(this)" class="btn complete-btn">Complete</button>
      <button onclick="editTask(this)" class="btn edit-btn">Edit</button>
      <button onclick="deleteTask(this)" class="btn delete-btn">Delete</button>
  `;
  taskList.appendChild(li);

  // Clear input fields after adding task
  document.getElementById('taskName').value = '';
  document.getElementById('taskDateTime').value = '';
}

// Function to mark task as completed
function completeTask(button) {
  const li = button.parentElement;
  li.classList.toggle('completed');
}

// Function to edit task details
function editTask(button) {
  const li = button.parentElement;
  const taskDetails = li.firstChild.textContent.split(' - ');

  const newTaskName = prompt('Edit task name:', taskDetails[0]);
  const newTaskDateTime = prompt('Edit date/time:', taskDetails[1]);

  if (newTaskName && newTaskDateTime) {
      li.firstChild.textContent = `${newTaskName} - ${newTaskDateTime}`;
  }
}

// Function to delete a task
function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}

// Search functionality for tasks
document.getElementById('taskSearch').addEventListener('keyup', function() {
  const searchValue = this.value.toLowerCase();
  const taskItems = document.querySelectorAll('#taskList li');

  taskItems.forEach(item => {
      const taskText = item.textContent.toLowerCase();
      if (taskText.includes(searchValue)) {
          item.style.display = 'flex';
      } else {
          item.style.display = 'none';
      }
  });
});
