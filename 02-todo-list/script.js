const addBtn = document.querySelector('#liveToastBtn')
const todoTask = document.querySelector('#task')
const todoUL = document.querySelector('#todoList')
const todoLİ = document.getElementsByTagName('li')

for(let i=0; i < todoLİ.length;i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.addEventListener('click',removeTodo)
    todoLİ[i].append(closeButton); 
    todoLİ[i].addEventListener('click',completedTodo)
}


function newElement(e) {
    if(todoTask.value.trim() == "" || todoTask.value == null) {
        $('.warning').toast('show')
        todoTask.value=""
       

    }
    else {
       let li = document.createElement('li')
       todoUL.appendChild(li);
       li.innerHTML = todoTask.value
       li.addEventListener('click',completedTodo)
       todoTask.value= ""


       let closeButton = document.createElement("span");
       closeButton.innerHTML = "\u00D7";
       closeButton.classList.add("close");
       li.appendChild(closeButton);
       $('.success').toast('show')
       closeButton.addEventListener('click',removeTodo)
       
    }
    
}



function completedTodo() {
    
    this.classList.toggle('checked')
}

function removeTodo() {

    this.parentElement.remove();
    $('.error').toast('show')
}

