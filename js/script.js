const bikes = [
    {name : "pantani", peso: 23},
    {name : "cannondale", peso: 25},
    {name : "bmc", peso: 22},
    {name : "trek", peso: 24},
];

//definisco bici piu leggera prima di fare il ciclo di confronto

let biciLeggera = bikes[0];
console.log(biciLeggera);
//ciclo per confrontare le bici per trovare uella con il peso minore
for (let i = 1; i < bikes.length; i++){
    if (bikes[i].peso < biciLeggera.peso){
        biciLeggera = bikes[i];
    }
}
console.log(biciLeggera);


//array di oggetti per squadre di calcio ogni squadra avra diverse proprieta nomi punti e falli, tutte settate a 0 solo una da completare 
const squadre = [
    {
        nome: "juventus",
        punti: 0,
        falli: 0,
    },
    {
        nome: "inter",
        punti: 0,
        falli: 0,
    },
    {
        nome: "milan",
        punti: 0,
        falli: 0,
    },
];

//definizione funzione per numeri casuali
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//ciclo per generare i punti e falli casuali per ogni squadra
for (let i = 0; i < squadre.length; i++){
    squadre[i].punti = getRandomInt(0, 100);
    squadre[i].falli = getRandomInt(0, 100);
}
console.log(squadre);
//creo un array vuoto per le squadre con piu falli
const squadrePiuFalli = [];
//ciclo per trovare la squadra con piu falli
for(let i=0; i < squadre.length; i++){
    if (squadre[i].falli > 50){
        squadrePiuFalli.push(squadre[i]);
    }
}
console.log(squadrePiuFalli);
