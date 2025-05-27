const newTask = document.querySelector('.topico');
const btnTask = document.querySelector('.add');
const task = document.querySelector('#texto');

const createLi = () => {
    const li = document.createElement('li');
    return li;
};

const clearInput = () => {
    newTask.value = '';
    newTask.focus();
};

const createbuttonClear = (li) => {
    li.innerHTML += ' ';
    const buttonClear = document.createElement('button')
    buttonClear.innerText = 'Apagar'
    buttonClear.setAttribute('class', 'clear')
    li.appendChild(buttonClear);
    saveTasks();
};

const createTask = (textInput) => {
    const li = createLi();
    li.innerHTML = textInput;
    task.appendChild(li);
    clearInput();
    createbuttonClear(li);
    saveTasks();
};

btnTask.addEventListener('click', function() {
    if (!newTask.value) return;
    createTask(newTask.value)
});

newTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!newTask.value) return;
        createTask(newTask.value)
    }
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('clear')) {
        el.parentElement.remove();
    }
});