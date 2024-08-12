document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-btn';
    completeButton.addEventListener('click', function() {
        const isCompleted = taskItem.classList.toggle('completed');
        toggleEditButton(taskButtons, isCompleted);
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.addEventListener('click', function() {
        if (!editButton.classList.contains('disabled')) {
            editTask(taskItem);
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(editButton);
    taskButtons.appendChild(deleteButton);
    taskItem.appendChild(taskButtons);
    taskList.appendChild(taskItem);
}

function editTask(taskItem) {
    const newTaskText = prompt("Edit your task:", taskItem.firstChild.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskItem.firstChild.textContent = newTaskText.trim();
    }
}

function toggleEditButton(taskButtons, isCompleted) {
    const editButton = taskButtons.querySelector('.edit-btn');
    if (isCompleted) {
        editButton.classList.add('disabled');
        editButton.disabled = true;
    } else {
        editButton.classList.remove('disabled');
        editButton.disabled = false; 
    }
}
