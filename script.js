let menu_icon = document.getElementById("menu_icon");
let menu_bar = document.getElementById("menu_bar");

menu_icon.addEventListener("click", () => {
    menu_bar.classList.toggle("hidden");
})