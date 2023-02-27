var notImportant = "fa-solid fa-file-arrow-down"
var importantIcon = "fa-solid fa-file-arrow-up"
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

function init(){
    console.log("Task manager");

    $("#formIcon").click(toggleImportant);
    $("#gone").click(disapear);
}

window.onload = init;