let narcPoint = Number(localStorage.getItem("narcPoint"));
let rencorPoint = Number(localStorage.getItem("rencorPoint"));
console.log(localStorage.getItem("narcPoint"));

    window.onload = function() {
        localStorage.setItem("narcPoint", narcPoint);
        localStorage.setItem("rencorPoint", rencorPoint);
        console.log(narcPoint + rencorPoint);
    };

function ending(){
    if(narcPoint > rencorPoint){
        window.location.href = "narc.html";
    }else{
        window.location.href = "renc.html";
    }
}

function dialog(memory, stage){

    document.getElementById("dialog1").innerHTML = dialogOpt[[memory][stage][1]].toString();
    document.getElementById("dialog2").innerHTML = dialogOpt[[memory][stage][2]].toString();
    
    if(stage < 2){
        stage++;
        dialog();
    }else if (memory < 2){
        memory++;
        loadCloset(memory);
    } else {
        ending();
    }
}

function narc(){
    narcPoint++;
}

function rencor(){
    rencorPoint++;
}

function nextDialog(next, end){
    if(end = "narc"){
        narcPoint++;
    
        localStorage.setItem("narcPoint", narcPoint);

    }else{
        rencorPoint++;
        localStorage.setItem("rencorPoint", rencorPoint);
    }

    window.location.href = next + ".html";
}

function loadCloset(){

    
    window.location.href = "closet.html";
}

function loadMemory(next){
    window.location.href = next + ".html";
}

