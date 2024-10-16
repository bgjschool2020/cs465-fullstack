const express = require('express'); // Express app
const router = express.Router(); // Router logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

//Define the router for registration endpoint
router
   .route('/register')
   .post(authController.register); // POST Method registers user

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController.tripsAddTrip); // POST Method Adds a Trip

// GET method routes tripsFindByCode - requires parameter
// PUT method routes tripUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
