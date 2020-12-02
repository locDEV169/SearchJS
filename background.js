const background = [
    { name: 'a', link: "images/bg1.png" },
    { name: 'b', link: "images/bg2.png" },
    { name: 'c', link: "images/bg3.png" },
    { name: 'd', link: "images/bg4.png" },
    { name: 'e', link: "images/bg5.png" }
]
const list = document.getElementById('list');

function setList(group) {
    clearList();
    for (const person of group) {
        var item = document.createElement('li');
        item.classList.add('list-group');
        const text = document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        setNoResults();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function setNoResults() {
    const item = document.createElement('li');
    item.classList.add('list-group');
    const text = document.createTextNode('No result');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.includes(searchTerm)) {
        return 0;
    } else if (value.starsWith(searchTerm)) {
        return 1;
    } else {
        return -1;
    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    var thumbnail = document.getElementsByClassName("thumbnail");
    var hero = document.getElementById("hero");
    var backgroundImg = new Array(
        "images/bg1.png",
        "images/bg2.png",
        "images/bg3.png",
        "images/bg4.png",
        "images/bg5.png"

    );
    var hero = document.getElementById("hero");
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        setList(background.filter(background => {
            if (value === 'b') {
                hero.style.backgroundImage = 'url("images/bg2.png")';
                thumbnail[1].classList.add("active");
                thumbnail[i].classList.remove("active");
            } else if (value === 'a') {
                hero.style.backgroundImage = 'url("images/bg1.png")';
                thumbnail[0].classList.add("active");
                thumbnail[i].classList.remove("active");
            } else if (value === 'c') {
                hero.style.backgroundImage = 'url("images/bg3.png")';
                thumbnail[2].classList.add("active");
                thumbnail[i].classList.remove("active");
            } else if (value === 'd') {
                hero.style.backgroundImage = 'url("images/bg4.png")';
                thumbnail[3].classList.add("active");
                thumbnail[i].classList.remove("active");
            } else if (value === 'e') {
                hero.style.backgroundImage = 'url("images/bg5.png")';
                thumbnail[4].classList.add("active");
                thumbnail[i].classList.remove("active");
            }
            return background.name.includes(value);
        }).sort((personA, personB) => {
            hero.style.backgroundImage = 'url("images/bg3.png")';
            return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
        }));
        console.log(value);
    } else {
        console.log(0);
        clearList();
    }

});