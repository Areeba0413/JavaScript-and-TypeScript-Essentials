const pkmnTrainers = [
    {
        name: "Mally",
        pkmn: "Ralts",
        age: 32,
        town: "Petalburg City",
    },
    {
        name: "Gary",
        pkmn: "Eevee",
        age: 30,
        town: "Pallet Town",
    },
    {
        name: "Lyra",
        pkmn: "Marill",
        age: 34,
        town: "New Bark Town",
    },
    {
        name: "Ash",
        pkmn: "Pikachu",
        age: 10,
        town: "Pallet Town",
    },
];

//finds and returns a value that satisfy the condition and doesnot check further
/*  
const palletTrainers = pkmnTrainers.find((trainer) => trainer.town == "Pallet Town");
console.log(palletTrainers);
*/

//cannot find an object that satisfy the condition returns undefined value instead of empty array
//like filter function
const palletTrainers = pkmnTrainers.find((trainer) => trainer.pkmn == "Dragonite");
console.log(palletTrainers);