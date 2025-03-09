const burger = document.querySelector("#burger");
const open = document.querySelector(".open");
burger.addEventListener("click", function() {
    open.style.display = "block";
});

const close = document.querySelector("#close");
close.addEventListener("click", function() {
    open.style.display = "none";
});

document.addEventListener("click", function(event) {
    if(!burger.contains(event.target) && !open.contains(event.target) && !close.contains(event.target)) {
        open.style.display = "none";
    }
})