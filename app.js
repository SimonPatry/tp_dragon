import dragons from "./assets/dragons.js"
import relationships from "./assets/relationships.js"
import forces from "./assets/forces.js"

const drag = dragons;
const relations = relationships;
const force = forces;

let swapSort = false;

function addDragon(dragon) {
    const mainUL = document.getElementById('listDragon');

    if (!mainUL) return;
    const nameLi = document.createElement("li");
    nameLi.id = `D${dragon.id}`;
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

    if (!nameLi) return;
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

    if (!nameLi) return;
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

function sortListDragon() {
    const orderStrongId = [];
    for (let i = 0; i < force.length; i++) {
        orderStrongId.push({ "id": force[i].id, "moyen": average(force[i].notes) });
    }

    if (swapSort) orderStrongId.sort((a, b) => a.moyen - b.moyen);
    else orderStrongId.sort((a, b) => b.moyen - a.moyen);

    for (let i = 0; i < orderStrongId.length; i++) {
        for (let y = 0; y < drag.names.length; y++) {
            if (orderStrongId[i].id == drag.names[y].id) {
                addDragon(drag.names[y]);
                break;
            }
        }
    }

    for (let i = 0; i < relations.length; i++) {
        addRelations(relations[i]);
    }

    for (let i = 0; i < force.length; i++) {
        addStrength(force[i]);
    }

    swapSort = !swapSort;
}

document.addEventListener("DOMContentLoaded", (event) => {

    loadNormalList();

    const mainDiv = document.getElementById('main');
    const btnSort = document.createElement("button");
    btnSort.id = "btnSort";
    btnSort.innerHTML = "trier par ordre ASC/DESC selon la force";
    btnSort.addEventListener("click", (e) => {
        const mainUL = document.getElementById('listDragon');
        mainUL.innerHTML = '';
        sortListDragon();

    });
    mainDiv.appendChild(btnSort);


});