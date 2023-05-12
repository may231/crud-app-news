const router = require('express').Router();
const {Event} = require('../db');

//get all events
router.get('/', async(req, res, next)=>{
    try{
        const events = await Event.findAll();
        res.send(events);
    } catch(er){
        next(er)
    }
})

//get event by id
router.get('/:id', async(req, res, next)=>{
    try{
        const event = await Event.findByPk(req.params.id);
        res.send(event);
    } catch(er) {
        next(er)
    }
})

module.exports = router;