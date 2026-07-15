const express = require('express')
const Mobile = require('../models/Mobile');
const MobileController = require('../controllers/MobileController');
const route = express.Router();

route.get('/mobiles', (req, res) => {
    MobileController.getMobiles(req, res);
})

route.get('/mobile/:mobileId', (req, res) => {
    MobileController.getMobileById(req, res);
})

route.post('/add/mobile', (req, res) => {
    MobileController.addMobile(req, res);
})

route.put('/edit/mobile/:mobileId', (req, res) => {
    MobileController.editMobile(req, res);
})

route.delete('/delete/mobile/:mobileId', (req, res) => {
    MobileController.deleteMobile(req, res);
})

module.exports = route;