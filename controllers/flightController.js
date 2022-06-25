let models = require('../models/Flight');
const { v4: uuidv4 } = require('uuid')

// This just hits the base url and just instruct you on what to do
exports.Flights = (req, res) => {;
    return res.status(200).send('<h1>This is an API site.</h1> <br /> To view the list of flights us the<b> /api/v1/flights</b> endpoint')
}

// Print out all flights
exports.listFlights = (req, res) => {
    let flights = models.exampleModel;
    res.send({flights})
}

// Add a flight with an unique Id to the Json file
exports.addFlight = (req, res) => {
    const flight = (req.body);
    
    let flights = models.exampleModel;
    flights.push({id: uuidv4(), ...flight}); // uuidv4 gives it a unique id
    
    res.send(`A new Flight has been added to the database!`)
}

// Prints out a file with the unique ID
exports.singleFlight = (req, res) => {
    const{ id } = req.params;
    let flights = models.exampleModel;
    const foundFlight = flights.find((flight) => flight.id === id);
    res.send(foundFlight)
}

// Delete a single flight based on Id
exports.deleteFlight = (req, res) => {
    const{ id } = req.params;

    let flights = models.exampleModel;

    deleteFlights = flights.filter((flight) => flight.id !== id);
    console.log(this.deleteFlight)
    res.send(`Flight with the id ${id} is deleted from the database.`)
}

// Patch or update a flight
exports.patchFlight = (req, res) => {
    const{ id } = req.params;
    const { title, time, Price, date } = req.body;
    let flights = models.exampleModel;
    let flightUpdate =  flights.find((flight) => flight.id === id);
    if (title) flightUpdate.title = title;
    if (time) flightUpdate.time = time;
    if (Price) flightUpdate.Price = Price;
    if (date) flightUpdate.date = date

    res.send(`User with the ${id} has been updates`)
}