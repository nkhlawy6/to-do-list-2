let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

//array to store data
let arrayOfTasks = [];
//Add Task
submit.onclick = function () {
  if (input.value != "") {
    addTaskToArry(input.value);
    input.value = "";
  }
};

function addTaskToArry(taskText) {
  //task data
  let task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  //push task to array to store it
  arrayOfTasks.push(task);
  //show tasks in the page
  addElementsToPageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  //empty tasks div
  tasksDiv.innerHTML = "";
  //looping on arrayOfTasks
  arrayOfTasks.forEach((task) => {
    //create main divtask
    let divTask=document.createElement('div');
    divTask.className='task';
    if(task.completed){
        divTask.className='task done'
    }
    divTask.setAttribute('data-id',task.id);
    divTask.appendChild(document.createTextNode(task.title));
    //create delete button
    let span=document.createElement('span');
    span.className='del';
    span.appendChild(document.createTextNode('Delete'))
    //append delete button to divTask
    divTask.appendChild(span)
    //append divTask to tasksDiv
    tasksDiv.append(divTask)
 
  });
}
