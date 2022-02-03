const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controler/usercontroller');

urlRoutes.post('/',controller.CreatOneRequest);
urlRoutes.get('/', controller.ReadOneRequest);
urlRoutes.get('/', controller.ReadAllRequest);


module.exports = urlRoutes;


