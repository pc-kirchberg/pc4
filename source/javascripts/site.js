window.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector(".menu-button");
    btn.addEventListener("click", function() {
        var menu = document.querySelector(".navbar");
        if (menu.classList.contains("hover")) {
            menu.classList.remove("hover");
            btn.innerHTML = "Menu";
        } else {
            menu.classList.add("hover");
            btn.innerHTML = "Close Menu";
        }
    });
});