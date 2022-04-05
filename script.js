window.onunload = function () {
    if (window.scrollY > 0) {
        window.scroll(0, 0);
    }
};

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
    document.querySelector("div#play-bu div:last-child").style.display = "block";
};

document.querySelector("div#play-bu div:last-child").onclick = function () {
    document.getElementById("vid").pause();
    this.style.display = "none";
    document.querySelector("div#play-bu div:first-child").style.display = "block";
};

document.querySelector(".bars").onclick = function () {
    this.style.color = "#E4E6EB !important";
    document.querySelector("ul.mo-nav").style.transform = "translateY(80.7px)";
    if (this.style.color === "#E4E6EBE") {
        document.querySelector("ul.mo-nav").style.transform = "translateY(-100vh)";
    }
};

new WOW().init();