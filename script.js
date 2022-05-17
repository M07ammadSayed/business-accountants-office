window.onscroll = function () {
    if (window.scrollY > 200) {
        document.getElementById("bi").style.bottom = "15px";
        document.getElementById("bi").style.opacity = "1";
    } else {
        document.getElementById("bi").style.bottom = "-50px";
        document.getElementById("bi").style.opacity = "0";
    }
};

document.getElementById("bi").onclick = function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
};

document.querySelector("div#play-bu div:first-child").onclick = function () {
    document.getElementById("vid").play();
    this.style.display = "none";
    document.querySelector("div#play-bu div:last-child").style.display = "flex";
};

document.querySelector("div#play-bu div:last-child").onclick = function () {
    document.getElementById("vid").pause();
    this.style.display = "none";
    document.querySelector("div#play-bu div:first-child").style.display = "flex";
};

document.querySelector(".bars").onclick = function () {
    if (document.querySelector("nav ul").style.transform !== "translateY(0px)") {
        document.querySelector("nav ul").style.transform = "translateY(0px)";
    } else {
        document.querySelector("nav ul").style.transform = "translateY(-100vh)";
    }
};

const navElements = document.querySelectorAll("nav ul a");
for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener("click", function () {
        if (document.documentElement.clientWidth <= 991.98) {
            document.querySelector("nav ul").style.transform = "translateY(-100vh)";
        }
    });
};

new WOW().init();