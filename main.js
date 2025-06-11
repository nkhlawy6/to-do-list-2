let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

//array to store data
let arrayOfTasks = [];

//check if there's data in the localstorage
if(window.localStorage.getItem('tasks')){
  arrayOfTasks=JSON.parse(window.localStorage.getItem('tasks'));
  console.log(arrayOfTasks)
}

//trigger data from localStorage
getDataFromLocalStorage()
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
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  //empty tasks div
  tasksDiv.innerHTML = "";
  //looping on arrayOfTasks
  arrayOfTasks.forEach((task) => {
    //create main divtask
    let divTask = document.createElement("div");
    divTask.className = "task";
    if (task.completed) {
      divTask.className = "task done";
    }
    divTask.setAttribute("data-id", task.id);
    divTask.appendChild(document.createTextNode(task.title));
    //create delete button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    //append delete button to divTask
    divTask.appendChild(span);
    //append divTask to tasksDiv
    tasksDiv.append(divTask);
  });
}


//save data in localStorage
function addDataToLocalStorageFrom(arrayOfTasks){
window.localStorage.setItem('tasks',JSON.stringify(arrayOfTasks))
}


//get data from localStorage
function getDataFromLocalStorage(){
  let data=window.localStorage.getItem('tasks');
  if(data){
    let tasks=JSON.parse(data);
    addElementsToPageFrom(tasks)
   
  }
 
}