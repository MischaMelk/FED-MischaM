var openButton = document.querySelector("header section button");

openButton.onclick = openMenu;

function openMenu() {
    var deNav =document.querySelector("nav");
    deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu(){
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}