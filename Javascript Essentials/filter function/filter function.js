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

//filter all values of object becaue condition is true
/*
const palletTrainers = pkmnTrainers.filter((trainer) => true);
console.log(palletTrainers);
*/

//filter trainers that are frompallet town
/*
const palletTrainers = pkmnTrainers.filter((trainer) => trainer.town == "Pallet Town");
console.log(palletTrainers);
*/

//filter trainers who are less than 15 years old
/*
const palletTrainers = pkmnTrainers.filter((trainer) => trainer.age < 15);
console.log(palletTrainers);
*/

//filters an empty array because condition does not matches with any value
//returns empty array
const palletTrainers = pkmnTrainers.filter((trainer) => trainer.age < 10);
console.log(palletTrainers);

