var notImportant = "fa-solid fa-file-arrow-down";
var importantIcon = "fa-solid fa-file-arrow-up";
var isImportant = false;
var view = true;

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

function toggleView(){

    if(view) {
        view = false;
        $("#form").hide();
    }else {
        view = true;
        $("#form").show();
    }
}

function saveTask(){
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val();
    let category = $("#selCategory").val();
    let dueDate = $("#selDueDate").val();
    let priority = $("#selPriority").val();
    let color = $("#selColor").val();

    let task = new Task(isImportant, title, desc, category, dueDate, priority, color);
    console.log(task);
    displayTask(task);
    clearEntry();


}


function displayTask(task){

    let icon = "";
if(task.isImportant){
    icon = `<i class = "important ${importantIcon}" ></i>`;
}
else {
    icon = `<i class = "regular ${notImportant}" ></i>`;
}

let syntax = 
    `<div class = "task" style="border: solid 5px ${task.color}">
    
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

function clearEntry(){
    title = $("#txtTitle").val("");
    desc = $("#txtDesc").val("");
    category = $("#selCategory").val("");
    dueDate = $("#selDueDate").val("");
    priority = $("#selPriority").val("");
    color = $("#selColor").val("");


}

function init(){
    
    $("#formIcon").click(toggleImportant);
    $("#changeView").click(toggleView);
    $("#btnSave").click(saveTask);
}

window.onload = init;