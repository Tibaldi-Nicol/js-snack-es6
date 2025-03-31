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
