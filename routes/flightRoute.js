const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.Flights);

router.get('/api/v1/flights', controller.listFlights);

router.post('/api/v1/flights', controller.addFlight);

router.get('/api/v1/flights/:id', controller.singleFlight)

router.patch('/api/v1/flights/:id', controller.patchFlight)

router.delete('/api/v1/flights/:id', controller.deleteFlight)


module.exports = router;

