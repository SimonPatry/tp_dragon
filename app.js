import dragons from "./assets/dragons.js"

const {names, count} = dragons;

const forces =  [
    { id: 1, notes : [12, 13, 19, 11] },
    { id: 2, notes : [11, 15, 17, 9] },
    { id: 3, notes : [20, 11, 12, 7] }
]

const relationships =  [
    { id: 1, relations : [2, 3] },
    { id: 2, relations : [1] },
    { id: 3, relations : [2] }
]


function coucou(){
    console.log("coucou");
};

function average(notes){
    return Math.floor(notes.reduce((acc, curr) => acc + curr, 0) / notes.length * 100)/100;
}

const aveStrength = [];

forces.forEach((relation => {
    aveStrength.push({id : relation.id, force: average(relation.notes)});
}))

document.addEventListener("DOMContentLoaded", (event) => {
    
    const dragonsDiv = document.getElementById("dragonList");
    let dragonList = `<ul>`;
    for (const dragon of names){
        console.log(dragon);
        dragonList +=`<li>name: ${dragon.name}, element: ${dragon.element ? dragon.element : "Unknown"}, force: ${aveStrength[dragon.id - 1].force}</li>`;
    }
    dragonList += '<ul>';
    dragonsDiv.innerHTML = dragonList;
    document.getElementById("btn").addEventListener("click", coucou)

});