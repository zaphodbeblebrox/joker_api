const Pet = require("../models/Pet");

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json({allPets}))
        .catch(err => console.log(err));
}

module.exports.findOnePet = (req, res) => {
    Pet.findById({_id: req.params.id})
        .then(onePet => res.json({pets: onePet}))
        .catch(err => console.log(err));
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({pets: newPet}))
        .catch(err => console.log(err));
}

module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true}
        )
        .then(updatedPet => res.json({pets: updatedPet}))
        .catch(err => console.log(err));
}

module.exports.deletePet = (req, res) => {
    Pet.findByIdAndDelete({_id: req.params.id})
        .then(results => res.json({result: results}))
        .catch(err => console.log(err));
}