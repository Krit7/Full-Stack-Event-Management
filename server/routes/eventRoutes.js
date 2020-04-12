const express= require('express')
const passport = require('passport');
require('../config/passport')(passport);
const router=express.Router()

const eventController=require('../controllers/eventController')

router.get('/',eventController.getEvents);

router.post('/newevent',passport.authenticate('jwt', { session: false}),eventController.addEvent)


module.exports= router