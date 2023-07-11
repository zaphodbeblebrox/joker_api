const drinkController = require("../controllers/drinkController");

module.exports = app => {
    app.get('/api/drinks', drinkController.findAllDrinks);
    app.get('/api/drinks/:id', drinkController.findOneDrink);
    app.post('/api/drinks', drinkController.createDrink);
    app.put('/api/drinks/:id', drinkController.updateDrink);
    app.delete('/api/drinks/:id', drinkController.deleteDrink);
};