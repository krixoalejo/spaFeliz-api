var serviceModel = require('../models/serviceModel');

exports.services_all_get = function (req, res) {
    serviceModel.findAll({
        attributes: ['id','name','description','cost','endHappy','image']
    })
    .then(services => res.json(services))
    .catch(err => res.status(500).send(err))
}

exports.services_detail_get = function (req, res) {
    serviceModel.findByPk(req.params.id, {
        attributes: ['id','name','description','cost','endHappy','image']
    })
    .then(service => res.json(service))
    .catch(err => res.status(500).send(err))
}