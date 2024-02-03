document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.querySelector('#taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', addTask);

  function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      taskItem.addEventListener('click', toggleTaskCompletion);
      taskItem.addEventListener('mouseover', function () {
        taskItem.setAttribute('title', 'Click to mark as completed');
      });

      // Append task to the list
      taskList.appendChild(taskItem);

      // Clear input field
      taskInput.value = '';

      // Access the next sibling element (if it exists) and apply some modifications
      const nextTask = taskItem.nextElementSibling;
      if (nextTask) {
        // Modify the next sibling element (you can perform any actions here)
        console.log('Next Sibling Text Content:', nextTask.textContent);
      }
    }
  }

  // Iterate over a collection of elements to accomplish some task
  const allTasks = document.querySelectorAll('#taskList li');
  allTasks.forEach(task => {
    task.addEventListener('click', toggleTaskCompletion);
    task.addEventListener('mouseover', function () {
      task.setAttribute('title', 'Click to mark as completed');
    });
  });

  function toggleTaskCompletion(event) {
    const clickedTask = event.target;
    clickedTask.classList.toggle('completed');
  }

  const windowWidth = window.innerWidth;
  const isOnline = navigator.onLine;

  console.log('Window Width:', windowWidth);
  console.log('Online Status:', isOnline);
});
