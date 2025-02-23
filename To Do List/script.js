const txtInput = document.querySelector("#txt1");
const btn = document.querySelector("#btn1");
const list = document.querySelector("#list");

getTasks();

btn.addEventListener('click' , validateInput);

function validateTask(input){
     if(input.value.length == 0){
          document.getElementById("error").innerHTML = "Please enter a valid task..";
          document.getElementById("error").style.color = "red";
          input.focus();
          return false;
     }
     else{
          document.getElementById("error").textContent = "";
          return true;
     }
}

function validateInput(){
     var task = txtInput.value;
     if(validateTask(txtInput)){
          addTask(task);
          txtInput.value = "";
          saveTask();
          console.log("Task Added");
     }
}

function addTask(task){
     const li = document.createElement('li');
     li.innerHTML = `<span>${task}</span>
     <button class='btn2'>Delete</button>
     <button class="btn3">Edit</button>`;
     list.appendChild(li);

     li.querySelector(".btn2").onclick = () => {
          deleteTask(li);
     };

     li.querySelector(".btn3").onclick = () => {
          editTask(li);
     };
}

function deleteTask(li){
     li.remove();
     saveTask();
     console.log("Task deleted");
}

function editTask(li) {
     const span = li.querySelector("span");
     const newText = prompt("Edit your task:", span.textContent);
     if (newText.length != 0){
          span.textContent = newText;
          saveTask();
          console.log("Task edited");
     }
}

function saveTask(){
     const tasks = [];
     list.querySelectorAll("li").forEach(li => {
          tasks.push(li.querySelector("span").textContent);
          jsonTasks = JSON.stringify(tasks);
          localStorage.setItem('tasks',jsonTasks);
     });
}

// on press enter -> add task
txtInput.addEventListener("keypress", function(e){
     if(e.key == "Enter"){
          btn.click();
     }
});

function getTasks(){
     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
     tasks.forEach(tsk => addTask(tsk));
}