let taskList = [];
let id = [];
const placeh = "Ingrese una nueva tarea";
const maxTask = 10;
for (let i = 0; i < maxTask; i++) {
    id[i] = ({ id: i, busy: false });
    taskList[i] = ({ id: i, title: "" });
}

const bSummit = document.querySelector('#bAgregar');
const bEliminar = document.querySelector('#bEliminar');
let checkboxes = [];


bSummit.addEventListener('click', function handleSubmit() {
    const textNewTask = document.querySelector("#inputText");
    if (textNewTask.value != "") {
        textNewTask.placeholder = placeh;
        let idForTask = 0;
        const divTask = document.querySelector("#checklist");


        for (let i = 0; i < maxTask; i++) {
            if (id[i].busy === false) {
                idForTask = id[i].id;
                id[i].busy = true;
                break;
            }
        }

        taskList[idForTask] = {
            id: id[idForTask].id,
            title: textNewTask.value,
            //completed: false
        }

        const task = document.createElement('div');
        const inputA = document.createElement('input');
        const labelA = document.createElement('label');

        task.classList.add('checkboxLabel');
        task.id = "divB" + taskList[idForTask].id;
        inputA.type = 'checkbox';
        inputA.name = 't' + taskList[idForTask].id;
        inputA.classList.add('theBoxes');
        inputA.id = taskList[idForTask].id;
        labelA.htmlFor = 't' + taskList[idForTask].id;
        labelA.textContent = taskList[idForTask].title;



        task.appendChild(inputA);
        task.appendChild(labelA);

        divTask.appendChild(task);
        textNewTask.value = "";
        checkboxes = document.querySelectorAll('.theBoxes');
    } else {
        textNewTask.placeholder = "No se escribio nada";
    }

});

/*document.onclick = () => {
    for (let objects in checkboxes) {
        let id = checkboxes[objects].id;
        if(checkboxes[objects].checked){
            taskList[id].completed === false ? taskList[id].completed = true : false;            
        } else {
            taskList[id].completed === true ? taskList[id].completed = false : true;            
        }        
    }
}*/


bEliminar.addEventListener('click', function handleDelete() {
    const divTask = document.querySelector("#checklist");

    for (let objects in checkboxes) {
        let a = checkboxes[objects];
        if (a.checked) {
            id[a.id].busy = false;
            taskList[a.id].title = "";
            //taskList[a.id].completed = false;
            divTask.removeChild(document.getElementById("divB" + a.id));
        }
    }

    checkboxes = document.querySelectorAll('.theBoxes');
});