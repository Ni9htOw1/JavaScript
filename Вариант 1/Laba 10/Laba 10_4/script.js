const input = document.querySelector('.input');
const taskList = document.querySelector('.task-list');
input.addEventListener('keyup', function(e) {
	if (e.keycode === 13 || e.which === 13) {
		addTask(this.value, taskList);
		this.value = '';
	}
});
function addTask(task, list) {
	const newTask = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.addEventListener('change', completeTask);
	const text = document.createElement('p');
	text.textContent = task;
	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'Х';
	deleteButton.addEventListener('click', deleteTask);
	newTask.appendChild(checkbox);
	newTask.appendChild(text);
	newTask.appendChild(deleteButton);
	list.appendChild(newTask);
}
function completeTask() {
	if (this.checked === true) {
		const text = this.parentElement.querySelector('p');
		text.style.textDecoration = 'line-through';
		text.style.color = 'grey';
		this.parentElement.removeChild(this);
	}
}
function deleteTask() {
	this.parentElement.parentElement.removeChild(this.parentElement);
}