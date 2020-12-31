let i = 0;

function next() {
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var thumbnail = document.getElementsByClassName("thumbnail");
    var hero = document.getElementById("hero");
    var backgroundImg = new Array(
        "images/bg1.png",
        "images/bg2.png",
        "images/bg3.png",
        "images/bg4.png",
        "images/bg5.png"

    );
    if (i < 4) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    } else {
        i -= 3;
        hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}
'url("images/bg1.png")'

function prev() {
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var thumbnail = document.getElementsByClassName("thumbnail");
    var hero = document.getElementById("hero");
    var backgroundImg = new Array(
        "images/bg1.png",
        "images/bg2.png",
        "images/bg3.png",
        "images/bg4.png",
        "images/bg5.png"

    );
    if (i > 0) {
        hero.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    } else {
        i += 3;
        hero.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
    
}
