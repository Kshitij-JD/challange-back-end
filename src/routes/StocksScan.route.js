const express = require('express')
const router = express.Router();
var StocksScan = require('../controllers/StocksScan.controller');

router.get('/',StocksScan.Details);

module.exports = router;