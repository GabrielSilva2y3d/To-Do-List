const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = docment.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

inputField.addEventListener("keyup", (e) => {
    let inputValue = inputField.value.trim();

    if(e.key === "Enter" && inputValue.length > 0){
    let tag = 
        `<li class="list">
            <input type= "checkbox"/>
            <span class="task">text2</span>
            <i class="uil uil-trash-alt"></i>
         </li>`;
        todoLists.insertAdjacentHTML("beforeend", tag);
    }
});

