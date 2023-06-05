/*   Global Variables    */

const taskName=document.getElementById("taskName");
const numberPriority=document.getElementById("numberPriority");
let taskContainer=[];

//     Add task button
function addTask(){
    if (validatinNameInput()==true){
    var task = {
        name: taskName.value,
        priority: numberPriority.value,
    }
    taskContainer.push(task);
    sortList();

    newTask();

    clearTask();
        }else{   
        }
    }

taskName.addEventListener("blur",validatinNameInput);
//     Create a new task 
function newTask(){
    let result="";
    for (let i = 0; i < taskContainer.length; i++) {
        result += 
        `<tr>
              <td>`+ i + `</td>
              <td>`+ taskContainer[i].name + `</td>
              <td>`+ taskContainer[i].priority + `</td>
             <td><button class="btn btn-warning" onclick="updateTask(`+i+`)">Edit</button></td>
              <td><button class="btn btn-danger" onclick="deleteTask(`+i+`)">Delete</button></td>
        </tr>`
        }
    document.getElementById("tasks").innerHTML = result;
}
function sortList(){

    let sortedList = document.getElementById("list").value;
    if(sortedList==2){
        taskContainer.sort(function(a,b){
            return (a.priority=='Medium')? -1 :1 
        });
        taskContainer.sort(function(a, b){
            return (a.priority=='High')? -1 :1 
        });
       }
    else if(sortedList==1){
        taskContainer.sort(function(a, b){
            return (a.priority=='Medium')? -1 :1 
        });
        taskContainer.sort(function(a, b){
            return (a.priority=='Low')? -1 :1 
        });
    }
    newTask();
}
function clearTask() {
   taskName.value= "";
   numberPriority.value= "";
} 

function updateTask(i){
    taskName.value=taskContainer[i].name;
    numberPriority.value=taskContainer[i].priority;
    deleteTask(i);
    newTask()
}

function deleteTask(i){
    taskContainer.splice(i,1);
    newTask()
}
function validatinNameInput(){
    let regex=/^[Aa-zZ]/;
    if(regex.test(taskName.value)==true){
        document.getElementById("errorTask").innerHTML= "Correct";
        document.getElementById("errorTask").style.color="green";
        taskName.style.borderColor="green";
         return true;
    }
    else{
        document.getElementById("errorTask").innerHTML= "This is a required Name";
        document.getElementById("errorTask").style.color="red";
        taskName.style.borderColor="red";
        return false;
    }
}
