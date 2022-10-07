import dragons from "./assets/dragons.js"
import relationships from "./assets/relationships.js"

const drag = dragons;
const relations = relationships;

function addDragon(dragon) {
    const mainUL = document.getElementById('listDragon');

    const nameLi = document.createElement("li");
    nameLi.setAttribute('id', `D${dragon.id}`);
    nameLi.innerHTML = dragon.name;


    const attriUl = document.createElement("ul");
    nameLi.appendChild(attriUl);

    const attriLi = document.createElement("li");
    attriLi.innerHTML = `Element: ${dragon.element ? dragon.element : "Unknown"}`;
    attriUl.appendChild(attriLi)


    mainUL.appendChild(nameLi);
}

function addRelations(rela) {
    const nameLi = document.getElementById(`D${rela.id}`);

    const relationUl = document.createElement("ul");
    nameLi.appendChild(relationUl);

    const relationLi = document.createElement("li");

    let namesRela = [];
    for (let i = 0; i < rela.relations.length; i++) {
        for (const dra of drag.names) {
            if (dra.id == rela.relations[i]) {
                namesRela.push(dra.name);
                break;
            }
        }
    }

    relationLi.innerHTML = `Relations: ${namesRela.join(', ')}`;
    relationUl.appendChild(relationLi)
}

function addStrength(force) {
    const aveStrength = [];

    forces.forEach((relation => {
        aveStrength.push({ id: relation.id, force: average(relation.notes) });
    }))
}

function average(notes) {
    return Math.floor(notes.reduce((acc, curr) => acc + curr, 0) / notes.length * 100) / 100;
}

function loadNormalList() {
    for (let i = 0; i < drag.names.length; i++) {
        addDragon(drag.names[i]);
    }

    for (let i = 0; i < relations.length; i++) {
        addRelations(relations[i]);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {

    loadNormalList();

});