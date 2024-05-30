const newTaskBtn = document.getElementById('criar-tarefa');
const tasksOl = document.getElementById('lista-tarefas');
const newTaskInput = document.getElementById('texto-tarefa');

newTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newTaskLi = document.createElement('li');
  newTaskLi.innerHTML = newTaskInput.value;
  tasksOl.appendChild(newTaskLi);
  newTaskInput.value = '';
});

const paintSelected = () => {
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
};

const scratchCompletedTasks = () => {
  tasksOl.addEventListener('dblclick', (e) => {
    if (e.target.classList == 'selected') {
      e.target.classList.remove('selected');
    }
    e.target.classList.add('selected');
  });
};

paintSelected();
scratchCompletedTasks();
