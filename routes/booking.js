var express = require('express');
var router = express.Router();

var bookingController = require('../controllers/bookingController');

/* GET services listing. */
router.post('/', bookingController.booking_post);

module.exports = router;