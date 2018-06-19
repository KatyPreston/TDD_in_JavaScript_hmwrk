const Dinosaur = require("./dinosaur");

const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
  this.dinosaurs.pop(dinosaur);
}

Park.prototype.findPopularDino = function(){
  this.dinosaurs.guestsAttractedPerDay;
  // sort the dinosaurs array based on guestsAttractedPerDay from max to min
  // return the dinosaur at index 0
}

Park.prototype.findBySpecies = function(species){
  chosenDinos = [];
  for (dino of this.dinosaurs){
    if(dino.species === species){
      chosenDinos.push(dino);
    }
    return chosenDinos;
  }
}

Park.prototype.removeBySpecies = function(species){
  this.findBySpecies(species);
  this.dinosaurs.pop(chosenDinos);
}

module.exports = Park;
