var announce = document.getElementsByClassName("announcement")[0];
announce.addEventListener("mouseover", function (e) {
    document.getElementsByClassName("announce_hover")[0].setAttribute("style", "display:block");
});
window.addEventListener("mouseout", function (e) {
    document.getElementsByClassName("announce_hover")[0].setAttribute("style", "display:none");
});
var announce_hover = document.getElementsByClassName("announce_hover")[0];
announce_hover.addEventListener("mouseover", function (e) {
    document.getElementsByClassName("announce_hover")[0].setAttribute("style", "display:block");
});
announce_hover.addEventListener("mouseout", function (e) {
    document.getElementsByClassName("announce_hover")[0].setAttribute("style", "display:none");
});
