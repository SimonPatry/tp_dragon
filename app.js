import dragons from "./assets/dragons.js"

const drag = dragons;

function coucou(){
    console.log("coucou");
}

document.addEventListener("DOMContentLoaded", (event) => {
    
    document.getElementById("btn").addEventListener("click", coucou)
 
});