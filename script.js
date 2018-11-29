var scroll = false;
window.onscroll = function (e) {
    if (window.scrollY >= 80 && scroll == false) {
        scroll = true;
        let header = document.querySelector("header");
        header.style.borderBottom = "1px solid #a9a9a9";
    } else if (window.scrollY < 80 && scroll == true) {
        scroll = false;
        let header = document.querySelector("header");
        header.style.borderBottom = "none";
    }
};