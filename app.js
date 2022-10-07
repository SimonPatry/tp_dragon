import dragons from "./assets/dragons.js"
import relationships from "./assets/relationships.js"
import forces from "./assets/forces.js"

const drag = dragons;
const relations = relationships;
const force = forces;

function addDragon(dragon) {
    const mainUL = document.getElementById('listDragon');

    if(!mainUL) return;
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

    if(!nameLi) return;
    const relationUl = document.createElement("ul");
    
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
    nameLi.appendChild(relationUl);
}

function addStrength(force) {
    const nameLi = document.getElementById(`D${force.id}`);

    if(!nameLi) return;
    const forceUl = document.createElement("ul");

    const forceLi = document.createElement("li");
    forceLi.innerHTML = `Force: ${average(force.notes)}`;

    forceUl.appendChild(forceLi)
    nameLi.appendChild(forceUl);
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

    for (let i = 0; i < force.length; i++) {
        addStrength(force[i]);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {

    loadNormalList();

});