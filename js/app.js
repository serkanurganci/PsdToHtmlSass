//Selected Elements
const collapseBtn = document.querySelector("#collapseBtn");
const sideBar = document.querySelector("#sideBar");
const collapseBtn2 = document.querySelector("#collapseBtn2");
const sideBar2 = document.querySelector("#sideBar2");

//Event Listeners
eventListeners();

function eventListeners(){
    collapseBtn.addEventListener("click",sideMenuControl);
    collapseBtn2.addEventListener("click",sideMenuControl2);
}

//Event Listener's Functions
let sideBarControl = false;
function sideMenuControl(){
    sideBarControl = !sideBarControl;
    if(sideBarControl){
        sideBar.classList.add("active");
    }else{
        sideBar.classList.remove("active")
    }
}

let sideBarControl2 = false;
function sideMenuControl2(){
    sideBarControl2 = !sideBarControl2;
    if(sideBarControl2){
        sideBar2.classList.add("active");
    }else{
        sideBar2.classList.remove("active")
    }
}