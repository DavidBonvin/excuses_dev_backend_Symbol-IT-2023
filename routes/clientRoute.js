const express = require('express');
const router = express.Router();
require('dotenv').config();
const controller = require('../controller/controllers');


router.get('/random', controller.Excuse.getRandomExcuses );
router.get('/all', controller.Excuse.getAllExcusesController);
router.post('/newexcuse', controller.Excuse.createExcuse);
router.get('/:http_code', controller.Excuse.getHttp_codeController)





module.exports = router;