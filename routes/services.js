var express = require('express');
var router = express.Router();

var servicesController = require('../controllers/servicesControllers');

/* GET services listing. */
router.get('/', servicesController.services_all_get);

/* GET service by id listing. */
router.get('/:id', servicesController.services_detail_get);

module.exports = router;