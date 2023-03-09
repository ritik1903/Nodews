const express = require('express');
const router = express.Router();

const usersController = require('../controllers/post_controller');

router.get('/posted', usersController.posted);

module.exports = router;