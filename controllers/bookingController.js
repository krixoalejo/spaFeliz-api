var bookingModel = require('../models/bookingModel');

exports.booking_post = function (req, res) {
    let booking = req.body;
    bookingModel.create({
        name1: booking.name1,
        name2: booking.name2,
        lastName1: booking.lastName1,
        lastName2: booking.lastName2,
        email: booking.email,
        date: booking.date,
        hour: booking.hour,
        serviceType: booking.serviceType
    })
    .then(booking => res.json(booking))
    .catch(err => res.status(500).send(err))
}