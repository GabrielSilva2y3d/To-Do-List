const inputField = document.querySelector(".input-field textarea"),
    todoLists = document.querySelector(".todoLists"),
    pendingNum = document.querySelector(".pending-num"),
    clearButton = document.querySelector(".clear-button");

function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto"
        return
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none"
}

inputField.addEventListener("keyup", (e) => {
    let inputValue = inputField.value.trim();

    if(e.key === "Enter" && inputValue.length > 0){
    let tag = 
        `<li id="list" class="list pending" onclick="handleStatus(this)">
            <input type= "checkbox"/>
            <span class="task">${inputValue}</span>
            <i class="uil uil-trash-alt" onclick="deleteTask(this)"></i>
         </li>`;

        todoLists.insertAdjacentHTML("beforeend", tag);
        inputField.value = "";
        allTasks();
    }
});

function listDarkMode(e){
    e.classList.toggle("dark-mode");
}

function handleStatus(e){
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

function deleteTask(e){
    e.parentElement.remove();
    allTasks();
}

clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
})


// dark mode script
const darkModeButton = document.getElementById('dark-mode-button'),
      darkContainer = document.getElementById('container'),
      pendingTasks = document.getElementById('pending-tasks'),
      textArea = document.getElementById('text-area'); 

const darkMode = localStorage.getItem('dark-mode');

if (darkMode === 'enabled') {
  document.body.classList.add('dark-mode');
  darkContainer.classList.toggle('dark-mode'); 
  pendingTasks.classList.toggle('dark-mode');
  darkModeButton.classList.toggle('dark-mode');
  textArea.classList.toggle('dark-mode');
}

darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    darkContainer.classList.toggle('dark-mode');
    pendingTasks.classList.toggle('dark-mode');
    darkModeButton.classList.toggle('dark-mode');
    textArea.classList.toggle('dark-mode');  

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.removeItem('dark-mode');
  }
});