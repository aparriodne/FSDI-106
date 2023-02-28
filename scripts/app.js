var notImportant = "fa-solid fa-file-arrow-down";
var importantIcon = "fa-solid fa-file-arrow-up";
var isImportant = false;
var vanish = true;

function disapear(){

    if(vanish) {
        vanish = false;
        $("#form").hide();
    }else {
        vanish = true;
        $("#form").show();
    }
}


function toggleImportant(){

    if (isImportant){
        
        isImportant = false;
        $("#formIcon")
        .removeClass(importantIcon)
        .addClass(notImportant);
    }
    else {

        isImportant = true;
        $("#formIcon")
        .removeClass(notImportant)
        .addClass(importantIcon);
    }

}

function saveTask(){
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val();
    let category = $("#selCategory").val();
    let dueDate = $("#selDueDate").val();
    let priority = $("#selPriority").val();
    let color = $("#selColor").val();

    /**
     * JS
     * Object Literal
     * Object constructor
     * Class
     */

    let task = new Task(isImportant, title, desc, category, dueDate, priority, color);
    console.log(task);
    displayTask(task);
    


}

function displayTask(task){

let icon = "";
if(task.isImportant){
    icon = `<i class = "regular ${importantIcon}" ></i>`;
}
else {
    icon = `<i class = "important ${notImportant}" ></i>`;
}

let syntax = 
`<div class= "task" style="border: solid 5px ${task.color}">

${icon}

        <div class="info">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        <div class="category">
            <label>${task.category}</label><br>
        </div>
        <div class="time">
            <label>${task.priority}</label><br>
            <label>${task.dueDate}</label><br>
        </div>
    </div>`;

    $("#pending-tasks").append(syntax);


}

function init(){
    console.log("Task manager");

    $("#formIcon").click(toggleImportant);
    $("#gone").click(disapear);
    $("#btnSave").click(saveTask);
}

window.onload = init;