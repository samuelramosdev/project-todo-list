const newTaskBtn = document.getElementById('criar-tarefa');
const tasksOl = document.getElementById('lista-tarefas');
const newTaskInput = document.getElementById('texto-tarefa');
const deleteAllBtn = document.getElementById('apaga-tudo');

newTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newTaskLi = document.createElement('li');
  newTaskLi.innerHTML = newTaskInput.value;
  tasksOl.appendChild(newTaskLi);
  newTaskInput.value = '';
});

let lastSelected = null;
tasksOl.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'LI') {
    if (lastSelected) {
      lastSelected.style.backgroundColor = '';
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    lastSelected = e.target;
  }
});

tasksOl.addEventListener('dblclick', (e) => {
  e.preventDefault()
  e.target.classList.toggle('completed');
});


deleteAllBtn.addEventListener('click', (e) => {
  e.preventDefault();
  tasksOl.innerHTML = '';
})