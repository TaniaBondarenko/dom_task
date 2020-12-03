let i = 0;
let content = document.getElementsByClassName("content");
let month = document.getElementsByClassName("month");
let img = ["images/jan.jpg","images/feb.jpg","images/apr.jpg",
    "images/may.jpg", "images/june.jpg", "images/july.jpg",
    "images/apr.jpg", "images/apr.jpg", "images/apr.jpg",
    "images/apr.jpg", "images/apr.jpg", "images/apr.jpg"];

function openMonth(evt, monthName) {
        for (i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }
        for (i = 0; i < month.length; i++) {
            month[i].className = month[i].className.replace(" active", "");
        }
        document.getElementById(monthName).style.display = "block";
        evt.currentTarget.className += " active";
}

window.addEventListener("load", addImg);
function addImg (){
    for (let i = 0; i < content.length; i++) {    
        content[i].innerHTML += '<img src="' + img[i] + '">';
        content[i].innerHTML;       
    }
}


