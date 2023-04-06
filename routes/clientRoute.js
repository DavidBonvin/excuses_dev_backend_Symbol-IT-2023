const express = require('express');
const router = express.Router();
require('dotenv').config();
const controller = require('../controller/controllers');


router.get('/random', controller.Excuse.getRandomExcuses );
router.get('/*', controller.Excuse.getAllExcusesController);
router.post('/newexcuse', controller.Excuse.createExcuse);





module.exports = router;