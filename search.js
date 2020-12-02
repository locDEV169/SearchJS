const people = [
    { name: 'david' },
    { name: 'patel' },
    { name: 'kevin' },
    { name: 'coco' },
    { name: 'steven' },
    { name: 'brock' },
    { name: 'rock' }
];

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
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(people.filter(person => {
            return person.name.includes(value);
        }).sort((personA, personB) => {
            return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);

        }));

    } else {
        clearList();
    }
    console.log(value);
});